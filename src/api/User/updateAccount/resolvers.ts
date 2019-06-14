import { ResolverMap } from "../../../Utils/gqlUtils";
import { updateUser } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    updateAccount: async (_, args) => {
      const { userid } = args;
      const changedUser = await updateUser({ userid }, { ...args });
      if (!changedUser) {
        throw new Error("유저 정보 변경이 실패하였습니다.");
      }
      return true;
    }
  }
};

export default resolvers;
