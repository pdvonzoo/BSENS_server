import * as mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  payment: { type: String }
});

const Order = mongoose.model("Order", orderSchema);

export { Order, orderSchema };
