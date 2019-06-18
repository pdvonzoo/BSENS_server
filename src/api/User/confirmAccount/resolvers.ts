import * as bcrypt from "bcrypt";
import { ResolverMap } from "../../../Utils/gqlUtils";
import { findUser, generateToken } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    cofirmAccount: async (_, args, { res }: any) => {
      const user: any = await findUser({ payload: { userid: args.userid } });
      if (!user) {
        throw new Error("해당 아이디가 없습니다.");
      }
      const valid = await bcrypt.compare(args.secret, user.password);
      if (!valid) {
        throw new Error("잘못된 패스워드 입니다.");
      }

      const { refreshToken, accessToken } = generateToken(user);
      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return true;
    }
  }
};

export default resolvers;
