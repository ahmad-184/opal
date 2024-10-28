import {
  LandmarkIcon,
  LaptopMinimalIcon,
  TimerIcon,
  UserRoundIcon,
  VideoIcon,
} from "lucide-react";

export const pricing = [
  {
    id: "FREE",
    title: "Free Trial",
    price: "0",
    features: [
      {
        icon: <VideoIcon size={23} strokeWidth={1.6} />,
        text: "25 videos per month (720p only)",
      },
      {
        icon: <TimerIcon size={23} strokeWidth={1.6} />,
        text: "5 min per video",
      },
      {
        icon: <LandmarkIcon size={23} strokeWidth={1.6} />,
        text: "1 Organization",
      },
      {
        icon: <UserRoundIcon size={23} strokeWidth={1.6} />,
        text: "No team member",
      },
      {
        icon: <LaptopMinimalIcon size={23} strokeWidth={1.6} />,
        text: "1-time AI features test",
      },
    ],
  },
  {
    id: "PROFESSIONAL",
    title: "Professional Plan",
    price: "99",
    features: [
      {
        icon: <VideoIcon size={23} strokeWidth={1.6} />,
        text: "Unlimitted videos (720p, 1080p quality)",
      },
      {
        icon: <TimerIcon size={23} strokeWidth={1.6} />,
        text: "Unlimitted duration",
      },
      {
        icon: <LandmarkIcon size={23} strokeWidth={1.6} />,
        text: "Unlimitted Organization",
      },
      {
        icon: <UserRoundIcon size={23} strokeWidth={1.6} />,
        text: "Unlimitted team member",
      },
      {
        icon: <LaptopMinimalIcon size={23} strokeWidth={1.6} />,
        text: "All AI features",
      },
    ],
  },
];
