import Logo from "@/components/logo";
import ModeToggle from "@/components/mode-toggle";
import LogoIcon from "@/icons/logo-icon";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container w-full flex max-w-[1400px] h-screen overflow-y-auto">
      <div className="mx-auto w-[400px] my-auto py-10">
        <div className="pb-7 w-full flex justify-center">
          <Logo className="font-bold text-2xl" />
        </div>
        <div className="w-full relative">
          <div className="w-full h-2/6 absolute top-0 rounded-[50%] radial--blur opacity-30" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
