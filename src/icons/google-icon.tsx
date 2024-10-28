import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  color?: string;
};

const GoogleIcon = ({ className, color }: Props) => {
  return (
    <div className={cn("w-7 h-7", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
        className="w-full h-full"
        fill={color ?? "#D9D9D9"}
      >
        <path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path>
      </svg>
    </div>
  );
};

export default GoogleIcon;
