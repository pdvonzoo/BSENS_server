import "dotenv/config";
import { User } from "../Model/User";
import { Address } from "../Model/Address";
import { sign } from "jsonwebtoken";
import { Product } from "../Model/Product";
import { ProductChild } from "../Model/ProductChild";

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
    { expiresIn: "60min" }
  );

  return { refreshToken, accessToken };
};

// Product

interface ProductInfo {
  productname: string;
}

export const findProduct = ({ payload }: { payload: any }) =>
  Product.findOne({ ...payload });

export const removeProduct = ({ _id }: any) => {
  const product = Product.findOneAndRemove({ _id });
  ProductChild.findOneAndRemove({ _id: product.productchildid });
  return product;
};

export const updateProduct = ({ id }: any, payload: ProductInfo) =>
  Product.findOneAndUpdate({ id }, { ...payload });
