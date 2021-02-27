import { randomBytes } from "crypto";

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const COOKIE_SECRET =
    process.env.COOKIE_SECRET || randomBytes(32).toString("hex");