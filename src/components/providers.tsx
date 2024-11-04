import { TailwindIndicator } from "@/components/tailwind-indicator";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}
      <TailwindIndicator />
    </>
  );
};

export default Providers;
