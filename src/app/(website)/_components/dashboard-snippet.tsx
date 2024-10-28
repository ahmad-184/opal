import Image from "next/image";

type Props = {};

const DashboardSnippet = ({}: Props) => {
  return (
    <div className="relative w-full py-14">
      <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-30 mx-10" />
      <div className="w-full aspect-video relative">
        <Image
          priority
          src="/snippet-2.png"
          className="opacity-[0.95]"
          alt="snippet"
          sizes="100vw"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default DashboardSnippet;
