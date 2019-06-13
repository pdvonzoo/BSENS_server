import { ResolverMap } from "../../Utils/gqlUtils";

const resolvers: ResolverMap = {
  Mutation: {
    createAccount: async (_, args) => {
      return null;
    }
  }
};

export default resolvers;
