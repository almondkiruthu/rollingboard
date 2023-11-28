import Navbar from "./_components/navbar";
import DashBoardNav from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Navbar />
      {children}
      {/* <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashBoardNav items={dashboardConfig.sideBarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-x-hidden overflow-y-auto"></main>
      </div>
      <SiteFooter className="border-t" /> */}
    </div>
  );
};

export default DashBoardLayout;
