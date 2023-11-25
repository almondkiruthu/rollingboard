import { authOptions } from "./auth";
import { getServerSession } from "next-auth/next";

export default async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}
