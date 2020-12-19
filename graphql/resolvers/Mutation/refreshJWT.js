import generateJWT from "../../../utils/auth/generateJWT";

export default function refreshJWT(query, args, { signedIn, user }) {
  if (!signedIn) {
    return null;
  }

  return generateJWT(user);
}
