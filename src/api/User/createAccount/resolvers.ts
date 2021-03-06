import * as bcrypt from "bcrypt";
import { ResolverMap } from "../../../Utils/gqlUtils";
import { User } from "../../../Model/User";
import { findUser } from "../../../Utils/commonUtils";
// import { Address } from "../../../Model/Address";

const resolvers: ResolverMap = {
  Mutation: {
    createAccount: async (_, args) => {
      const { userid, username, secret } = args;
      if (!args.role) {
        args.role = "customer";
      }
      const overlapUser = await findUser({ payload: { userid } });
      if (overlapUser) {
        throw new Error("중복된 아이디입니다.");
      }
      const saltRounds = 10;
      const password = await bcrypt.hash(secret, saltRounds);
      if (!password) {
        throw new Error("password hash error");
      }
      const newUser = await new User({
        role: args.role,
        userid,
        username,
        password
      });
      await newUser.save();
      // console.log(address);
      // const getAddress = await findAddress({ zonecode: address.zonecode });
      // if (!getAddress) {
      //   const newAddress = await new Address({ ...address });
      //   await newAddress.save();
      // }

      return true;
    }
  }
};

export default resolvers;
