import React from "react";

import Navbar from "./_components/navbar-component";
import SiteFooter from "@/components/site-footer";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <SiteFooter className="-mb-4" />
    </div>
  );
};

export default DashBoardLayout;
