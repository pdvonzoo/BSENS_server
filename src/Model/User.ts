import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: { type: String, required: true },
  userid: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  addressid: { type: Schema.Types.ObjectId, ref: "Address" },
  phonenumber: { type: Number },
  username: { type: String },
  userimage: { type: String },
  count: { type: Number },
  create_at: { type: Date },
  updated_at: { type: Date }
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };
