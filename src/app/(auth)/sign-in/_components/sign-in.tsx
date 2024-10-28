"use client";

import SignInUpGoogle from "@/components/auth/sign-in-up-google";
import SignInForm from "@/components/forms/sign-in-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = {};

const SignIn = ({}: Props) => {
  return (
    <Card className="shadow-none relative z-10 overflow-hidden backdrop-blur-[20px] bg-neutral-50/30 dark:bg-neutral-900/30 w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome back! Log in to create, share, and connect with AI-powered
          videos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className="w-full flex flex-col gap-4 mt-2">
        <div className="relative w-full mb-5">
          <Separator />
          <div className="dark:bg-neutral-950 bg-neutral-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute w-fit px-3 py-2 text-muted-foreground text-xs">
            OR CONTINUE WITH
          </div>
        </div>
        <SignInUpGoogle />
      </CardFooter>
    </Card>
  );
};

export default SignIn;
