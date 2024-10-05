"use client";

import Link from "next/link";
import { buyProduct } from "./buyProduct";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

function Icon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 12"
      ></path>
    </svg>
  );
}

function Main() {
  const plausible = usePlausible();
  const { data: session } = useSession();

  return (
    <section className="max-w-5xl mx-auto  flex flex-col items-center justify-center px-8 p-2 lg:p-6 my-12">
      <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center mb-10">
        <h1 className="font-extrabold text-4xl tracking-tight md:-mb-4">
          Discover The Latest Environmental Jobs
        </h1>
        <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
          Job board for environmental professionals.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="btn btn-outline btn-error gap-0.5 text-base border-2">
          Job Filters
          <Icon />
        </button>
        <button className="btn btn-outline btn-error gap-0.5 text-base border-2">
          Locations
          <Icon />
        </button>
      </div>
    </section>
  );
}

export default Main;
