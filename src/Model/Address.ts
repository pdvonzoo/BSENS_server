import * as mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipcode: { type: String },
  create_at: { type: Date },
  updated_at: { type: Date }
});

const Address = mongoose.model("Address", addressSchema);

export { Address, addressSchema };
