import { GOOGLE_CLIENT_ID } from "../../constants";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export default async function getIdTokenPayload(token) {
  try {
    const ticket = await client.verifyIdToken({
      token,
      audience: GOOGLE_CLIENT_ID,
    });

    return ticket.getPayload();
  } catch (e) {
    return null;
  }
}
