import { User } from "next-auth";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav = () => {
  return <div></div>;
};

export default UserAccountNav;
