"use client";

import LogoIcon from "@/icons/logo-icon";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";

type Props = {
  className: string;
};

const Logo = ({ className }: Props) => {
  const { theme } = useTheme();

  return (
    <Link href={"/"} className={cn("flex items-center gap-2", className)}>
      <LogoIcon {...(theme === "light" && { color: "#0a0a0a" })} />
      <p className="font-bold">Opal.</p>
    </Link>
  );
};
export default Logo;
