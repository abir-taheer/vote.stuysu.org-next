import { ForbiddenError } from "apollo-server-micro";
import { GOOGLE_CLIENT_ID } from "../../constants";

export default function validateIdTokenPayload(payload) {
    if (!payload) {
        throw new ForbiddenError("That id token is not valid.");
    }

    if (payload.aud !== GOOGLE_CLIENT_ID) {
        throw new ForbiddenError(
            "That id token was not generated for this app."
        );
    }

    if (!payload.email_verified) {
        throw new ForbiddenError(
            "That email is not verified and cannot be used for sign in."
        );
    }
}
