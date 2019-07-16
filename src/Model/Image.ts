import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: { type: String },
  url: { type: String }
});

const Image = mongoose.model("Image", imageSchema);

export { Image, imageSchema };
