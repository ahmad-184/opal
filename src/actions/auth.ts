"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";
import { getUserByClerkId } from "./user";

export const getCurrentUser = cache(async () => {
  const user = await currentUser();
  if (!user) return undefined;
  const user_exist = await getUserByClerkId({ id: user.id });
  return user_exist.data;
});

export const validateUser = cache(async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");
  const user_exist = await getUserByClerkId({ id: user.id });
  if (!user_exist.data) return redirect("/sign-in");
  return user_exist.data;
});
