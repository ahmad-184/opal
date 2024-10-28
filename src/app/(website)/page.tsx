import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";
import Pricing from "./_components/pricing";

type Props = {};

const Page = ({}: Props) => {
  return (
    <div className="mt-10 md:mt-16 w-full mx-auto flex flex-col gap-10 pb-20">
      <div className="mb-16">
        <CallToAction />
        <DashboardSnippet />
      </div>
      <Pricing />
    </div>
  );
};

export default Page;
