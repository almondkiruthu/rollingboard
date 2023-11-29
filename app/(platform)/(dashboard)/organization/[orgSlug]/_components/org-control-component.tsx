import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useOrganizationList } from "@clerk/nextjs";

const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationSlug as string,
    });
  }, [setActive, params.organziationSlug]);

  return null;
};

export default OrgControl;
