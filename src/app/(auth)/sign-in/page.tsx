import { auth } from "@clerk/nextjs/server";
import SignIn from "./_components/sign-in";
import { redirect } from "next/navigation";
// "initial commit, completed landing page."
type Props = {};

const Page = async ({}: Props) => {
  const { userId } = await auth();
  if (userId) return redirect("/dashboard");

  return <SignIn />;
};

export default Page;
