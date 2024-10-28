"use client";

import Logo from "@/components/logo";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "@clerk/clerk-react";
import ButtonWithLoaderAndProgress from "@/components/button-with-loader-and-progress-bar";
import { Skeleton } from "@/components/ui/skeleton";
import { LogInIcon } from "lucide-react";

type Props = {};

const LandingPageNavigation = ({}: Props) => {
  const { isSignedIn, isLoaded } = useSession();

  return (
    <div className="w-full mx-auto flex justify-between items-center gap-5 py-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-9 text-sm font-medium">
        <Link
          href={"/"}
          className="px-5 py-2 text-neutral-50 bg-purple-700 hover:bg-purple-700/90 transition rounded-3xl"
        >
          Home
        </Link>
        <Link href={"/"}>Pricing</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="flex items-center gap-2">
        {!isLoaded ? (
          <Skeleton className="h-8 w-16 rounded-xl" />
        ) : (
          <Link href={"/sign-in"}>
            <Button className="font-medium" variant={"outline"}>
              {isSignedIn ? (
                "Dashboard"
              ) : (
                <div className="w-full flex items-center gap-2">
                  <LogInIcon size={18} strokeWidth={1.4} />
                  Login
                </div>
              )}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LandingPageNavigation;
