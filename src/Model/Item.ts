import * as mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  payment: { type: String }
});

const Item = mongoose.model("Item", itemSchema);

export { Item, itemSchema };
