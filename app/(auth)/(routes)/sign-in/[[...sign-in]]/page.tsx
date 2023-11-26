import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
    <SignIn
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: "#0e7490" },
      }}
    />
  );
}
