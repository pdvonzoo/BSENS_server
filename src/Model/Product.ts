import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productname: { type: String },
  productimage: { type: String },
  create_at: { type: Date },
  updated_at: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };
