import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <article className="flex flex-col gap-24 md:gap-32 w-full bg-neutral text-gray-300 py-20 lg:py-44 px-2" id="reviews">
      <section>
        <div className="flex flex-col justify-between items-center lg:flex-row gap-20 container max-w-4xl mx-auto">
          <Image
            src="/sarah.webp"
            alt="Sarah"
            width={200}
            height={280}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-end">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Sarah, Expecting Mom
            </h3>
            <p className="py-6 opacity-60 text-center lg:text-left">
              I love how easy it is to plan my meals now! The daily suggestions
              take all the guesswork out of eating healthy for my baby.
            </p>
          </div>
        </div>
      </section>
      <section className="hidden lg:block">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-20 container max-w-4xl mx-auto">
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-end">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Emma, New Mom
            </h3>
            <p className="py-6 opacity-60 text-center lg:text-left">
              As a new mom, I barely had time to think about cooking. But
              <strong className="text-primary"> EnvironmentalJobBoards</strong> changed
              that! The recipes are so yummy, even my husband loves them!
            </p>
          </div>
          <Image
            src="/emma.webp"
            alt="Emma"
            width={200}
            height={280}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </section>
      <section className="lg:hidden block">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-20 container max-w-4xl mx-auto">
          <Image
            src="/emma.webp"
            alt="Emma"
            width={200}
            height={280}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-end">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Emma, New Mom
            </h3>
            <p className="py-6 opacity-60 text-center lg:text-left">
              As a new mom, I barely had time to think about cooking. But
              <strong className="text-primary"> EnvironmentalJobBoards</strong> changed
              that! The recipes are so yummy, even my husband loves them!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-between items-center lg:flex-row gap-20 container max-w-4xl mx-auto">
          <Image
            src="/lisa.webp"
            alt="Lisa"
            width={200}
            height={280}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex items-center justify-center flex-col lg:items-start lg:justify-end">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-center lg:text-left">
              Lisa, Second-time Mom
            </h3>
            <p className="py-6 opacity-60 text-center lg:text-left">
              With my first pregnancy, I struggled to eat right. This app helped
              me eat better for my babies, and I feel so much more energetic. I
              love how it adapts to each trimester's needs.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Hero;
