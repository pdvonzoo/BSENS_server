import * as mongoose from "mongoose";

const productChildSchema = new mongoose.Schema({
  color: { type: String },
  price: { type: String },
  size: { type: String },
  qty: { type: Date, required: true }
});

const ProductChild = mongoose.model("ProductChild", productChildSchema);

export { ProductChild, productChildSchema };
