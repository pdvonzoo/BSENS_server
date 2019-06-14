import { User } from "../Model/User";
import { Address } from "../Model/Address";

interface UserInfo {
  username: string;
}

export const findUser = ({ userid }: { userid: string }) =>
  User.findOne({ userid });

export const deleteUser = ({ userid }: { userid: string }) =>
  User.findOneAndRemove({ userid });

export const updateUser = ({ userid }: { userid: string }, payload: UserInfo) =>
  User.findOneAndUpdate({ userid }, { ...payload });

export const findAddress = ({ zonecode }: { zonecode: string }) =>
  Address.findOne({ zonecode });
// export const generateToken = id:string => jwt.sign({ id }, process.env.JWT_SECRET);
