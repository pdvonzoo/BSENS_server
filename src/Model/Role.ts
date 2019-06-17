import * as mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  title: { type: String, required: true }
});

const Role = mongoose.model("Role", roleSchema);

export { Role, roleSchema };
