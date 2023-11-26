"use client";

import { Button } from "./ui/button";

interface SignOutButtonProps {
  signOut: () => void;
}

const SignOutButton = ({ signOut }: SignOutButtonProps) => {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default SignOutButton;
