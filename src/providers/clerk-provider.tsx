"use client";
import { ClerkProvider as Clerk } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

const ClerkProvider = ({ children }: Props) => {
  return <Clerk>{children}</Clerk>;
};

export default ClerkProvider;
