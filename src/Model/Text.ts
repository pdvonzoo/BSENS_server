import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const textSchema = new Schema({
  title: { type: String },
  url: { type: String }
});

const Text = mongoose.model("Text", textSchema);

export { Text, textSchema };
