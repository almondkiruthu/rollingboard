import { OrgControl } from "./_components/org-control-component";
import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

interface OrganizationSlugLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
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
