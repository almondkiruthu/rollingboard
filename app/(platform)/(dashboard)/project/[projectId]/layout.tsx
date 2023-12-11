import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

interface ProjectIdLayoutProps {
  children?: React.ReactNode;
  params: { projectId: string };
}

const ProjectIdLayout = async ({ children, params }: ProjectIdLayoutProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.project.findUnique({
    where: {
      id: params.projectId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }
  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      {/* TODO: Create BoardNavbar  */}
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full container">{children}</main>
    </div>
  );
};

export default ProjectIdLayout;
