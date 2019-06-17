import * as mongoose from "mongoose";
import { productChildSchema } from "./ProductChild";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  product_child: { type: productChildSchema },
  create_at: { type: Date, required: true },
  updated_at: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };
