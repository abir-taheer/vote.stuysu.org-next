import mongoose from "./mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    gradYear: { type: Number, required: false },
    adminRoles: [String],
});

UserSchema.statics.findByEmail = email => {
    return mongoose.models.Users.findOne({ email });
};

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default Users;
