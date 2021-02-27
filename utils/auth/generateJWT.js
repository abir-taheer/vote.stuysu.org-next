import { sign } from "jsonwebtoken";
import { COOKIE_SECRET } from "../../constants";

export default function generateJWT(user) {
    return sign(
        {
            user: {
                id: user._id,
                email: user.email,
            },
            audience: "vote.stuysu.org",
            issuer: "vote.stuysu.org",
        },
        COOKIE_SECRET,
        { expiresIn: "14d" }
    );
}
