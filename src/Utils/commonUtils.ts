import { User } from "../Model/User";
import { Address } from "../Model/Address";
import { sign } from "jsonwebtoken";

interface UserInfo {
  username: string;
}

export const findUser = ({ payload }: { payload: any }) =>
  User.findOne({ ...payload });

export const deleteUser = ({ userid }: { userid: string }) =>
  User.findOneAndRemove({ userid });

export const updateUser = ({ userid }: { userid: string }, payload: UserInfo) =>
  User.findOneAndUpdate({ userid }, { ...payload });

export const findAddress = ({ zonecode }: { zonecode: string }) =>
  Address.findOne({ zonecode });

export const generateToken = (user: any) => {
  const accessToken = sign(
    { userid: user.userid },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );

  const refreshToken = sign(
    { userid: user.userid, count: user.count },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "15min" }
  );

  return { refreshToken, accessToken };
};
