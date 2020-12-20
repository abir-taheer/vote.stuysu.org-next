import { ForbiddenError, ApolloError } from "apollo-server-micro";
import getIdTokenPayload from "../../../utils/auth/getIdTokenPayload";
import validatePayload from "../../../utils/auth/validatePayload";
import User from "../../../models/users";
import generateJWT from "../../../utils/auth/generateJWT";

export default async function (mutation, { idToken }, { signedIn }) {
  if (signedIn) {
    throw new ForbiddenError("You are already signed in.");
  }

  const payload = await getIdTokenPayload(idToken);
  validatePayload(payload);

  const user = await User.getByEmail(payload.email);

  if (!user) {
    throw new ApolloError(
      "There's no user with that email address.",
      "USER_NOT_FOUND"
    );
  }

  return generateJWT(user);
}
