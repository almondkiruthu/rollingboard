import OrgControl from "./_components/org-control";

interface OrganizationIdLayoutProps {
  children: React.ReactNode;
}
const OrganizationIdLayout = ({ children }: OrganizationIdLayoutProps) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default OrganizationIdLayout;
