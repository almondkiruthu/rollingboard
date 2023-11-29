import Sidebar from "../_components/sidebar-component";

interface OrganizationLayoutProps {
  children: React.ReactNode;
}

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <main className="pt-20 md:pt-32 container">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
