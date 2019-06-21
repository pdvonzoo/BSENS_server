import "dotenv/config";
import { User } from "../Model/User";
import { Address } from "../Model/Address";
import { sign } from "jsonwebtoken";
import { Product } from "../Model/Product";

// Auth

interface UserInfo {
  username: string;
}

export const findUser = ({ payload }: any) => User.findOne({ ...payload });

export const deleteUser = ({ userid }: { userid: string }) =>
  User.findOneAndRemove({ userid });

export const updateUser = ({ userid }: { userid: string }, payload: UserInfo) =>
  User.findOneAndUpdate({ userid }, { ...payload });

export const findAddress = ({ zonecode }: { zonecode: string }) =>
  Address.findOne({ zonecode });

export const generateToken = (user: any) => {
  console.log(user);
  const refreshToken = sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );

  const accessToken = sign(
    { id: user._id, count: user.count },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "15min" }
  );

  return { refreshToken, accessToken };
};

// Product

interface ProductInfo {
  productname: string;
}

export const findProduct = ({ payload }: { payload: any }) =>
  Product.findOne({ ...payload });

export const removeProduct = ({ _id }: any) =>
  Product.findOneAndRemove({ _id });

export const updateProduct = ({ id }: any, payload: ProductInfo) =>
  Product.findOneAndUpdate({ id }, { ...payload });
