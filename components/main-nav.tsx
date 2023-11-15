import Link from "next/link";
import { Icons } from "./icons";

const MainNav = () => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.mainLogo />
        <span>
            
        </span>
      </Link>
    </div>
  );
};

export default MainNav;
