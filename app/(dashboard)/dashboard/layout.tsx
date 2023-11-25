import getCurrentUser from "@/lib/session";

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout = async ({ children }: DashBoardLayoutProps) => {
  const user = await getCurrentUser();
  return <div></div>;
};

export default DashBoardLayout;
