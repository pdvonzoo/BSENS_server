import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const textSchema = new Schema({
  title: { type: String },
  text: { type: String }
});

const Text = mongoose.model("Text", textSchema);

export { Text, textSchema };
