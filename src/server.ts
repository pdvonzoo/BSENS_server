import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import * as mongoose from "mongoose";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import genSchema from "./Utils/genSchema";
// import { authenticateToken } from "./MiddleWare/authenticateJwt";
import { verify } from "jsonwebtoken";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema: genSchema() as any,
  context: ({
    request,
    response
  }: {
    request: Request;
    response: Response;
  }) => ({ request, response })
});

mongoose.connect(process.env.DATABASE_URL as string, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

server.express.use(logger("dev"));
server.express.use(cookieParser());
server.express.use((req: any, _: any, next: any) => {
  const accessToken = req.cookies["access-token"];
  if (accessToken) {
    try {
      const data = verify(accessToken, process.env
        .ACCESS_TOKEN_SECRET as string) as any;
      req.id = data.id;
    } catch (err) {
      console.log(err);
    }
  }
  next();
});

// server.express.use(authenticateToken);

server.start(
  {
    port: PORT,
    cors: {
      credentials: true,
      origin: ["http://localhost:3000"]
    }
  },
  () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }
);
