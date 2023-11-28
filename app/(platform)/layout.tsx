import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: "#0e7490" },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
