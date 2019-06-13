import * as mongoose from "mongoose";

const productChildSchema = new mongoose.Schema({
  price: { type: String },
  color: { type: String },
  text: { type: String },
  size: { type: String },
  qty: { type: Date }
});

const ProductChild = mongoose.model("ProductChild", productChildSchema);

export { ProductChild, productChildSchema };
