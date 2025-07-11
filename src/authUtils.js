// src/authUtils.js
import { auth } from "./firebase";

export async function getUserToken() {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    return token;
  }
  return null;
}
