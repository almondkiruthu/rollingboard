import Navbar from "./_components/navbar";
import SiteFooter from "@/components/site-footer";

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      {/* TODO: add site footer */}
    </div>
  );
};

export default DashBoardLayout;
