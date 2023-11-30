import React from "react";

import Navbar from "./_components/navbar-component";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
