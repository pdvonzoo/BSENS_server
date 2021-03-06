import { ResolverMap } from "../../../Utils/gqlUtils";
import { findUser } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Query: {
    me: async (_, __, { request }: any) => {
      const user = await findUser({ payload: { _id: request.userid } });
      if (!user) {
        throw new Error("잘못된 정보의 사용자입니다.");
      }
      return user;
    }
  }
};

export default resolvers;
