import { Metadata } from "next";

import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};
export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: "#0e7490" },
      }}
    />
  );
}
