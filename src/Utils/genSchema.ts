import * as path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const genSchema = () => {
  const allTypes = fileLoader(path.join(__dirname, "/../api/**/*.graphql"));
  const allResolvers = fileLoader(
    path.join(__dirname, "/../api/**/resolvers.ts")
  );
  return makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
  });
};

export default genSchema;
