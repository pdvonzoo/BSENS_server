import * as bcrypt from "bcrypt";
import { ResolverMap } from "../../../Utils/gqlUtils";
import { findUser, generateToken } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Query: {
    cofirmAccount: async (_, args, { res }: any) => {
      const user: any = await findUser({ userid: args.userid });
      if (!user) {
        throw new Error("잘못된 아이디입니다.");
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
