import * as mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  addressType: { type: String },
  zonecode: { type: String },
  address: { type: String },
  roadAddress: { type: String },
  sido: { type: String },
  sigungu: { type: String },
  bname: { type: String },
  query: { type: String },
  create_at: { type: Date },
  updated_at: { type: Date }
});

const Address = mongoose.model("Address", addressSchema);

export { Address, addressSchema };
