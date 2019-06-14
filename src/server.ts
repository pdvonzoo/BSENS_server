import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import * as mongoose from "mongoose";
import genSchema from "./Utils/genSchema";
import { authenticateToken } from "./MiddleWare/authenticateJwt";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema: genSchema() as any
  // context: ({ request }) => ({
  //   url: request.protocol + "://" + request.get("host"),
  //   req: request
  // })
});

mongoose.connect(process.env.DATABASE_URL as string, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

server.express.use(authenticateToken);

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
