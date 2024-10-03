import Image from "next/image";
import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";

function Main() {
  const plausible = usePlausible();
  return (
    <section className="container max-w-7xl mx-auto flex flex-col items-center justify-between px-8 py-8 lg:py-20 gap-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-16">
        <div className="flex flex-col gap-10 lg:gap-14 items-center lg:items-start text-center lg:text-left w-full lg:w-2/3">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex justify-center items-center">
            <span className="hidden lg:block whitespace-wrap lg:whitespace-nowrap relative">
              Eat <strong className="relative text-primary">Right </strong> for{" "}
              <strong className="relative text-primary">Your</strong> Baby
            </span>
            <span className="lg:hidden whitespace-wrap lg:whitespace-nowrap relative">
              Eat <strong className="relative text-primary">Right </strong> for
              <br /> <strong className="relative text-primary">
                Your
              </strong>{" "}
              Baby
            </span>
          </h1>
          <p className="hidden lg:block text-xl opacity-90 leading-relaxed">
            Personal <strong className="relative text-primary">meal </strong>
            plan for <strong className="relative text-primary">
              pregnant
            </strong>{" "}
            women. <br />
            Get daily, <strong className="relative text-primary">weekly</strong>
            , and monthly{" "}
            <strong className="relative text-primary">meal</strong> plan.
          </p>
          <p className="lg:hidden block text-base opacity-90 leading-relaxed overflow-x-auto whitespace-nowrap">
            Personal <strong className="relative text-primary">meal </strong>
            plan for <strong className="relative text-primary">
              pregnant
            </strong>{" "}
            women. <br /> Get daily,{" "}
            <strong className="relative text-primary">weekly</strong>, and
            monthly <strong className="relative text-primary">meal</strong>{" "}
            plan.
          </p>
          <CTAButton plausibleNameBeforeLogin="GET_STARTED_MAIN" />
        </div>

        <div className="hidden lg:block relative max-md:-m-4 lg:w-1/2">
          <Image
            src={"/main.webp"}
            alt="Uptime 24/7 notify via SMS, EMAIL"
            width={1080}
            height={1080}
            className="w-full max-w-xl ml-auto"
            priority={true}
          />
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-lg text-neutral-500">Yummy Meals, Strong Baby</p>
      </div>
    </section>
  );
}

export default Main;
