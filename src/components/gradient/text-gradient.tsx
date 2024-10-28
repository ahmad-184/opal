import { cn } from "@/lib/utils";

type Props = {
  element?: "H1" | "H2";
  children: React.ReactNode;
  className?: string;
};

const GradientText = ({ children, className, element }: Props) => {
  switch (element) {
    case "H1":
      return (
        <h1
          className={cn(
            "text-gradient bg-clip-text bg-gradient-to-r from-[#848ea5] dark:from-[#4a4e58] via-black/90 dark:via-white to-[#716768]",
            className
          )}
        >
          {children}
        </h1>
      );
    case "H2":
      return (
        <h2
          className={cn(
            "text-gradient bg-clip-text bg-gradient-to-r from-[#848ea5] dark:from-[#4a4e58] via-black/90 dark:via-white to-[#716768]",
            className
          )}
        >
          {children}
        </h2>
      );
    default:
      return (
        <p
          className={cn(
            "text-gradient bg-clip-text bg-gradient-to-r from-[#848ea5] dark:from-[#4a4e58] via-black/90 dark:via-white to-[#716768]",
            className
          )}
        >
          {children}
        </p>
      );
  }
};

export default GradientText;
