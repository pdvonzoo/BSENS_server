import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  create_at: { type: Date },
  updated_at: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };
