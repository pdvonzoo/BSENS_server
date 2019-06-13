import * as dotenv from "dotenv";
dotenv.config();

import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
