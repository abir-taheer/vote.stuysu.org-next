import User from "../../../models/users";

export default (root, { id }) => User.findById(id);
