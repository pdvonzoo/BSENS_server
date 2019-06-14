import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import * as mongoose from "mongoose";
import genSchema from "./Utils/genSchema";
import { authenticateToken } from "./MiddleWare/authenticateJwt";
import * as cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema: genSchema() as any,
  context: ({ req, res }: any) => ({ req, res })
});

mongoose.connect(process.env.DATABASE_URL as string, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

server.use(cookieParser());
server.express.use(authenticateToken);

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
