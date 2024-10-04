"use client";

import Link from "next/link";
import { buyProduct } from "./buyProduct";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

function Main() {
  const plausible = usePlausible();
  const { data: session } = useSession();
  return (
    <section className="max-w-5xl mx-auto  flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 p-2 lg:p-6">
      <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
        <h1 className="font-extrabold text-4xl tracking-tight md:-mb-4">
          Discover The Latest Environmental Jobs
        </h1>
        <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
          
        </p>
      </div>
    </section>
  );
}

export default Main;
