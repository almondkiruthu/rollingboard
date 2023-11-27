import * as React from "react";

import { cn } from "@/lib/utils";

interface DashBoardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const DashBoardShell = ({
  children,
  className,
  ...props
}: DashBoardShellProps) => {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  );
};

export default DashBoardShell;
