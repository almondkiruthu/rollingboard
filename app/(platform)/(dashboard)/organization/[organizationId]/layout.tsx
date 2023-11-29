import OrgControl from "./_components/org-control-component";

interface OrganizationSlugLayoutProps {
  children: React.ReactNode;
}

const OrganizationSlugLayout = ({ children }: OrganizationSlugLayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationSlugLayout;
