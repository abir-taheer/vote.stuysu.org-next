import mongoose from "./mongoose";
import shortid from "shortid";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate,
	},
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	email: { type: String, default: "" },
	gradYear: { type: Number, required: false },
	adminRoles: [String],
	// Array of elections the user has voted for
	votedIn: [String],
});

const User = mongoose.model("User", UserSchema);

export default User;
