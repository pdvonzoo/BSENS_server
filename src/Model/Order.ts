import * as mongoose from "mongoose";
import { productSchema } from "./Product";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: { type: productSchema }
});

const Order = mongoose.model("Order", orderSchema);

export { Order, orderSchema };
