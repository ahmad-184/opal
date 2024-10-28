// import GradientText from "@/components/global/gradient-text"
import GradientText from "@/components/gradient/text-gradient";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
// import { BadgePlus } from "@/icons"
import Link from "next/link";

type Props = {};

const CallToAction = ({}: Props) => {
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText
        element="H1"
        className="text-[35px] md:text-[40px] md:text-center lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
      >
        Create, Share, Connect – AI-Powered Videos at Your Fingertips
      </GradientText>

      <p className="text-sm md:text-center md:max-w-[500px] text-left text-muted-foreground">
        Opal makes sharing AI-driven videos easy and exciting. Whether you’re
        creating for fun or connecting with friends, unleash creativity with a
        platform built to inspire.
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button variant="outline" className="rounded-xl bg-transparent text-sm">
          Watch Demo
        </Button>
        <Link href="/sign-in">
          <Button className="rounded-xl text-sm flex gap-2 w-full">
            <PlusCircleIcon size={16} strokeWidth={1.4} /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
