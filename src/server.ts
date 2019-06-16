import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import * as mongoose from "mongoose";
import * as cookieParser from "cookie-parser";
import genSchema from "./Utils/genSchema";
// import { authenticateToken } from "./MiddleWare/authenticateJwt";
import { verify } from "jsonwebtoken";

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

server.use((req: any, _: any, next: any) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return next();
  }
  try {
    const data = verify(accessToken, process.env
      .ACCESS_TOKEN_SECRET as string) as any;
    req.userId = data.userId;
  } catch (err) {
    console.log(err);
  }
  next();
});

// server.express.use(authenticateToken);

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
