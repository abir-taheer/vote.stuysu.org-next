import mongoose from "./mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  gradYear: { type: Number, required: false },
  adminRoles: [String],
});

UserSchema.statics.getByEmail = email => {
  return mongoose.model("User").findOne({ email });
};

UserSchema.statics.getByStringId = id => {
  const objectId = mongoose.Types.ObjectId(id);
  return mongoose.model("User").findById(objectId);
};

const User = mongoose.model("User", UserSchema);

export default User;
