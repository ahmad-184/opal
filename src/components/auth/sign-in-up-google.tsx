import GoogleIcon from "@/icons/google-icon";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type Props = {};

const SignInUpGoogle = ({}: Props) => {
  const { theme } = useTheme();

  return (
    <Button variant={"secondary"} className="w-full flex items-center gap-2">
      <GoogleIcon
        className="w-5 h-5"
        color={theme === "light" ? "black" : "white"}
      />{" "}
      Google
    </Button>
  );
};

export default SignInUpGoogle;
