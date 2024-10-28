import LandingPageNavigation from "./_components/landing-page-navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container max-w-[1400px]">
      <div className="w-full mx-auto flex flex-col gap-5">
        <LandingPageNavigation />
      </div>
      {children}
    </div>
  );
};

export default Layout;
