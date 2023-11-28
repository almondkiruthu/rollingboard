import { Sidebar } from "lucide-react";

interface OrganizationLayoutProps {
  children: React.ReactNode;
}

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <main className="pt-20 md:pt-24 px-4 container max-w-6xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default OrganizationLayout;
