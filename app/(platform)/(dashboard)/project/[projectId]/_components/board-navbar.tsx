import { Project } from "@prisma/client";

interface BoardNavbarProps {
  data: Project;
}

const BoardNavbar = ({ data }: BoardNavbarProps) => {
  return (
    <div
      className="W-FULL H-14 z-40 bg-black/50 fixed top-14 flex items-center px-6 
  gap-x-4 text-white
  "
    >
      {/* TODO: Create board title form  */}
      <div className="ml-auto">{/* TODO: Create Board Options  */}</div>
    </div>
  );
};

export default BoardNavbar;
