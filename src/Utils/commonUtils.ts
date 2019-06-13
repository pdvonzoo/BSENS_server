import { User } from "../Model/User";

export const findUser = ({ userid }: { userid: string }) =>
  User.findOne({ userid });

// export const generateToken = id:string => jwt.sign({ id }, process.env.JWT_SECRET);
