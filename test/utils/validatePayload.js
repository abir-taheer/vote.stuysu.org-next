import validateIdTokenPayload from "../../utils/auth/validateIdTokenPayload";
import { ForbiddenError } from "apollo-server-micro";
import { GOOGLE_CLIENT_ID } from "../../constants";
import { expect } from "chai";

describe("validateIdTokenPayload", () => {
    it("should throw an error if the payload is null", () => {
        expect(() => validateIdTokenPayload(null)).to.throw(
            ForbiddenError,
            "That id token is not valid."
        );
    });

    it("should throw an error when the audience doesn't match app client id.", () => {
        const partiallyIncorrectPayload = {
            email_verified: true,
            sub: "iusdnfsd",
            email: "email@email.com",
            aud: GOOGLE_CLIENT_ID + "extra",
        };

        expect(() => validateIdTokenPayload(partiallyIncorrectPayload)).to.throw(
            ForbiddenError,
            "That id token was not generated for this app."
        );
    });

    it("should throw an error when the user's email isn't verified", () => {
        const partiallyIncorrectPayload = {
            email_verified: false,
            sub: "iusdnfsd",
            email: "email@email.com",
            aud: GOOGLE_CLIENT_ID,
        };

        expect(() => validateIdTokenPayload(partiallyIncorrectPayload)).to.throw(
            ForbiddenError,
            "That email is not verified and cannot be used for sign in."
        );
    });
});
