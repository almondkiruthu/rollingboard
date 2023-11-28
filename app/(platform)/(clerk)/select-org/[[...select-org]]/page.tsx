import { OrganizationList } from "@clerk/nextjs";

export const metadata = {
  title: "Organization",
  description: "Create a new organization or login to your existing one",
};
export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
