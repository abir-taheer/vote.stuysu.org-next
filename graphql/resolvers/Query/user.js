import User from "../../../models/users";

export default (root, { id }) => {
  return User.findById(id);
};
