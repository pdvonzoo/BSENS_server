import "dotenv/config";
import * as bcrypt from "bcrypt";
import { ResolverMap } from "../../../Utils/gqlUtils";
import { findUser } from "../../../Utils/commonUtils";
import { sign } from "jsonwebtoken";

const resolvers: ResolverMap = {
  Mutation: {
    cofirmAccount: async (_, args, { response }: any) => {
      const user: any = await findUser({ payload: { userid: args.userid } });
      if (!user) {
        throw new Error("해당 아이디가 없습니다.");
      }
      const valid = await bcrypt.compare(args.secret, user.password);
      if (!valid) {
        throw new Error("잘못된 패스워드 입니다.");
      }
      const accessToken = sign(
        { userId: user.id },
        process.env.ACCESS_TOKEN_SECRET as string,
        {
          expiresIn: "15min"
        }
      );
      response.cookie("id", accessToken);

      // const { refreshToken, accessToken } = generateToken(user);
      // response.cookie("refresh-token", refreshToken);
      // response.cookie("access-token", accessToken);
      console.log(response);
      return true;
    }
  }
};

export default resolvers;
