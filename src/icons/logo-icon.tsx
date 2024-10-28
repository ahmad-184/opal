import { cn } from "@/lib/utils";

type Props = { color?: string; classname?: string };

const LogoIcon = ({ color, classname }: Props) => {
  return (
    <div className={cn("w-8 h-8", classname)}>
      <svg
        width="42"
        height="41"
        viewBox="0 0 42 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.93288 0C4.64935 0 0.366211 4.28314 0.366211 9.56666V31.4333C0.366211 36.7169 4.64935 41 9.93288 41H31.7995C37.0831 41 41.3662 36.7169 41.3662 31.4333V9.56667C41.3662 4.28314 37.0831 0 31.7995 0H9.93288ZM20.8662 39.1364C31.1588 39.1364 39.5026 30.7926 39.5026 20.5C39.5026 10.2074 31.1588 1.86365 20.8662 1.86365C10.5736 1.86365 2.22986 10.2074 2.22986 20.5C2.22986 30.7926 10.5736 39.1364 20.8662 39.1364Z"
          fill={color ?? "#D9D9D9"}
        />
      </svg>
    </div>
  );
};

export default LogoIcon;
