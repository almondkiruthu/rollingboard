import { Metadata } from "next";

import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};
export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: "#0e7490" },
      }}
    />
  );
}
