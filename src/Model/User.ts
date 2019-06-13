import * as mongoose from "mongoose";
import { addressSchema } from "./Address";

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  addtess: { type: addressSchema },
  phonenumber: { type: Number },
  username: { type: String },
  userimage: { type: String },
  create_at: { type: Date },
  updated_at: { type: Date }
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };