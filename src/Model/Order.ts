import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ productid: { type: Schema.Types.ObjectId, ref: "Product" } }]
});

const Order = mongoose.model("Order", orderSchema);

export { Order, orderSchema };
