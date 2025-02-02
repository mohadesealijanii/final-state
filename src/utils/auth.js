import { compare, hash } from "bcryptjs";

export async function hashPass(password) {
  const hashedPass = await hash(password, 12);
  return hashedPass;
}

export async function verifyPass(password, hashedPass) {
  const isValid = await compare(password, hashedPass);
  return isValid;
}
