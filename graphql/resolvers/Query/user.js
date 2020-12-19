import User from "../../../models/user";

export default (root, { id }) => User.getByStringId(id);
