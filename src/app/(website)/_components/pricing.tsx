import BackdropGradient from "@/components/gradient/backdrop-gradient";
import GradientText from "@/components/gradient/text-gradient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { pricing } from "@/constants/pricing";
import { cn } from "@/lib/utils";

type Props = {};

const Pricing = ({}: Props) => {
  return (
    <div className="w-full mx-auto flex justify-center flex-col gap-7">
      <div className="text-left md:text-center">
        <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
          <GradientText
            className="text-[25px] md:text-[35px] md:text-center lg:text-[40px] leading-tight font-bold"
            element="H2"
          >
            Pricing Plans That Fit Your Right
          </GradientText>
        </BackdropGradient>
        <p className="text-sm md:text-center md:max-w-[500px] mx-auto text-left text-muted-foreground">
          Opal makes sharing AI-powered videos easy—create, connect, and
          inspire.
        </p>
      </div>
      <div className="flex items-stretch gap-5 justify-center">
        {pricing.map((e) => (
          <Card
            key={e.id}
            className={cn(
              "shadow-none relative z-10 overflow-hidden backdrop-blur-[20px] dark:bg-neutral-800/15 w-[400px]",
              {
                "bg-neutral-100": e.id === "FREE",
              }
            )}
          >
            {e.id === "PROFESSIONAL" && (
              <div className="w-full h-full absolute top-0 z-[-1] rounded-[0%] radial--blur bg-gradient-to-br !from-purple-600 !to-white dark:!to-black opacity-60" />
            )}
            <CardHeader>
              <h2 className="font-semibold text-muted-foreground">{e.title}</h2>
              <p className="text-4xl font-bold">${e.price}/m</p>
            </CardHeader>
            <CardContent>
              <Button
                className={cn("font-semibold h-10 w-full", {
                  "bg-white hover:bg-neutral-50 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80":
                    e.id === "FREE",
                })}
                variant={e.id === "PROFESSIONAL" ? "default" : "secondary"}
              >
                Get Started
              </Button>
            </CardContent>
            <CardFooter>
              <div className="w-full flex flex-col gap-3">
                {e.features.map((f) => (
                  <div
                    key={f.text}
                    className={cn(
                      "flex items-center gap-2 text-black dark:text-muted-foreground",
                      {
                        "dark:text-neutral-300": e.id === "PROFESSIONAL",
                      }
                    )}
                  >
                    {f.icon}
                    <p className="font-medium">{f.text}</p>
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Pricing;
