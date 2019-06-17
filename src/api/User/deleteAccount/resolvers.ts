import { ResolverMap } from "../../../Utils/gqlUtils";
import { deleteUser } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    deleteAccount: async (_, args) => {
      const { userid } = args;
      const removedUser = await deleteUser({ userid });
      if (!removedUser) {
        throw new Error("존재하지 않는 계정입니다.");
      }
      return true;
    }
  }
};

export default resolvers;
