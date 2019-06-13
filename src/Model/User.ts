import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  userimage: { type: String }
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };
