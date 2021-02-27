import { ForbiddenError, ApolloError } from "apollo-server-micro";
import getIdTokenPayload from "../../../utils/auth/getIdTokenPayload";
import validateIdTokenPayload from "../../../utils/auth/validateIdTokenPayload";
import User from "../../../models/users";
import { sign } from "jsonwebtoken";
import getJWTSecret from "../../../utils/auth/getJWTSecret";
import fieldsCannotBeEmpty from "../../../utils/user-input/fieldsCannotBeEmpty";

export default async function (mutation, { idToken }, { signedIn }) {
    if (signedIn) {
        throw new ForbiddenError("You are already signed in.");
    }

    fieldsCannotBeEmpty({ idToken });

    const payload = await getIdTokenPayload(idToken);
    validateIdTokenPayload(payload);

    const user = await User.findByEmail(payload.email);

    if (!user) {
        throw new ApolloError(
            "There's no user with that email address. Contact stuyboe@gmail.com if this is a mistake.",
            "USER_NOT_FOUND"
        );
    }

    const { id, email, firstName, lastName } = user;

    const tokenData = {
        user: {
            id,
            email,
            firstName,
            lastName,
        },
    };

    const secret = await getJWTSecret();

    return sign(tokenData, secret, { expiresIn: "30d" });
}
