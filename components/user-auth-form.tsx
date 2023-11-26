import { useState } from "react";

import { Icons } from "./icons";
import SignInButton from "./sign-in-button";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "@/lib/auth";

const UserAuthForm = () => {
  return (
    <div className="grid gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>
      <SignInButton
        signIn={async () => {
          "use server";
          await signIn("github", {
            redirectTo: "/dashboard",
          });
        }}
      />
    </div>
  );
};

export default UserAuthForm;
