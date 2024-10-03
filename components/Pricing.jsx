import Image from "next/image";
import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { buyProduct } from "./buyProduct";
import { usePlausible } from "next-plausible";

function Pricing(props) {
  const plausible = usePlausible();
  return (
    <section className="bg-neutral text-gray-300 py-44 flex flex-col overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-center items-center px-10 text-center mb-20 flex-col gap-10 lg:gap-14">
          <div>
            <div className="badge animate-bounce whitespace-nowrap badge-primary">
              ✨ LAUNCH discount — 50% OFF 3 months ✨
            </div>
          </div>
          <h2
            className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4"
            id="pricing"
          >
            <strong className="relative text-primary">Pricing</strong>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="card bg-[#fafafa] w-80 shadow-xl text-[#151515] mx-auto lg:mx-0">
            <div className="flex flex-row justify-between items-center pl-8 pr-8 pt-8">
              <h3 className="font-bold text-2xl lg:text-3xl tracking-tight">
                <strong className="relative">Yummy Starter</strong>
              </h3>
              <Image
                // src={"/team.svg"}
                src={"/person.svg"}
                alt="HTTP Website Monitoring - environmentaljobboards.com"
                width={80}
                height={80}
                className=" w-20 h-20"
              />
            </div>
            <div className="card-body">
              <div className="flex items-end gap-2">
                <div className="flex flex-col mb-1 text-lg">
                  <p className="relative opacity-80">
                    <span className="absolute bg-base-content h-[0.1em] inset-x-0 top-1/2"></span>
                    <span className="text-base-content">$9.98</span>
                  </p>
                </div>
                <span className="text-5xl tracking-tight font-extrabold">
                  $4.99
                </span>
                <div className="flex flex-col mb-1">
                  <p className="text-xs opacity-60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>

              <p className="text-neutral-500">Great for new moms-to-be.</p>

              <button
                className="btn btn-primary rounded-full my-2"
                onClick={(e) => {
                  e.preventDefault();
                  plausible("SUBSCRIBE_NOW_PERSONAL");
                  buyProduct();
                }}
              >
                Get my meals
              </button>

              <h4 className="font-bold text-xl tracking-tight">20 <strong className="text-primary">recipes</strong></h4>

              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Safe food list</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    First <strong className="text-primary">trimester</strong>{" "}
                    focus
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-base-content/30 shrink-0"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                  <span>No email support </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#fafafa] w-80 shadow-xl text-[#151515] mx-auto lg:mx-0">
            <div className="flex flex-row justify-between items-center pl-8 pr-8 pt-8">
              <h3 className="font-bold text-2xl lg:text-3xl tracking-tight">
                <strong className="relative">Super Food Pack</strong>
              </h3>
              <Image
                src={"/team.svg"}
                alt="HTTP Website Monitoring - environmentaljobboards.com"
                width={80}
                height={80}
                className=" w-20 h-20"
              />
            </div>
            <div className="card-body">
              <div className="flex items-end gap-2">
                <div className="flex flex-col mb-1 text-lg">
                  <p className="relative opacity-80">
                    <span className="absolute bg-base-content h-[0.1em] inset-x-0 top-1/2"></span>
                    <span className="text-base-content">$19.98</span>
                  </p>
                </div>
                <span className="text-5xl tracking-tight font-extrabold">
                  $9.99
                </span>
                <div className="flex flex-col mb-1">
                  <p className="text-xs opacity-60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>

              <p className="text-neutral-500">
                Perfect for health-conscious moms.
              </p>

              <button
                className="btn btn-primary rounded-full my-2"
                onClick={(e) => {
                  e.preventDefault();
                  plausible("SUBSCRIBE_NOW_TEAM");
                  buyProduct("493049");
                }}
              >
                Get my meals
              </button>

              <h4 className="font-bold text-xl tracking-tight">50 <strong className="text-primary">recipes</strong></h4>

              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Safe food list</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Second <strong className="text-primary">trimester</strong>{" "}
                    focus
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-base-content/30 shrink-0"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                  <span>No email support </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#fafafa] w-80 shadow-xl text-[#151515] mx-auto lg:mx-0">
            <div className="flex flex-row justify-between items-center pl-8 pr-8 pt-8">
              <h3 className="font-bold text-2xl lg:text-3xl tracking-tight">
                <strong className="relative">Magic Mom Menu</strong>
              </h3>
              <Image
                src={"/team.svg"}
                alt="HTTP Website Monitoring - environmentaljobboards.com"
                width={80}
                height={80}
                className=" w-20 h-20"
              />
            </div>
            <div className="card-body">
              <div className="flex items-end gap-2">
                <div className="flex flex-col mb-1 text-lg">
                  <p className="relative opacity-80">
                    <span className="absolute bg-base-content h-[0.1em] inset-x-0 top-1/2"></span>
                    <span className="text-base-content">$39.98</span>
                  </p>
                </div>
                <span className="text-5xl tracking-tight font-extrabold">
                  $19.99
                </span>
                <div className="flex flex-col mb-1">
                  <p className="text-xs opacity-60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>

              <p className="text-neutral-500">Best for moms who want it all.</p>

              <button
                className="btn btn-primary rounded-full my-2"
                onClick={(e) => {
                  e.preventDefault();
                  plausible("SUBSCRIBE_NOW_ENTERPRISE");
                  buyProduct("493050");
                }}
              >
                Get my meals
              </button>

              <h4 className="font-bold text-xl tracking-tight">150 <strong className="text-primary">recipes</strong></h4>

              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Safe food list</span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    All <strong className="text-primary">trimester</strong>{" "}
                    focus
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>24/7 email support </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
