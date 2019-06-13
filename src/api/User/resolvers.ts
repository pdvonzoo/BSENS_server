import { ResolverMap } from "../../Utils/gqlUtils";

const resolvers: ResolverMap = {
  Query: {
    something: () => "hello"
  },
  Mutation: {
    createAccount: async (_, args) => {
      return false;
    }
  }
};

export default resolvers;
