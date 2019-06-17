import { ResolverMap } from "../../../Utils/gqlUtils";
import { findUser } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    verifyPhoneNumber: async (_, args) => {
      const { phonenumber } = args;
      const overlapPhone = await findUser({ payload: { phonenumber } });
      if (!overlapPhone) {
        throw new Error("중복된 핸드폰 번호입니다.");
      }
      return true;
    }
  }
};

export default resolvers;
