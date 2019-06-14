import * as bcrypt from "bcrypt";
import { ResolverMap } from "../../../Utils/gqlUtils";
import { User } from "../../../Model/User";
import { findUser } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Query: {
    something: () => "hello"
  },
  Mutation: {
    createAccount: async (_, args) => {
      const { userid, username, secret } = args;
      const overlapUser = await findUser({ userid });
      if (overlapUser) {
        throw new Error("중복된 아이디입니다.");
      }
      const saltRounds = 10;
      const password = await bcrypt.hash(secret, saltRounds);
      if (!password) {
        throw new Error("password hash error");
      }
      const newUser = await new User({ userid, username, password });
      await newUser.save();
      return true;
    }
  }
};

export default resolvers;