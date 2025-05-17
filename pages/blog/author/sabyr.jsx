import Footer from "@/components/Footer";
import BlogHeader from "../BlogHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { customConfig } from "@/project.custom.config";

function Sabyr({ posts }) {
  console.log(posts, "posts sabyr");
  return (
    <div className="mx-auto">
      <Head>
        <title>{customConfig.blog.author.name}, author at EnvironmentalJobBoards Blog</title>
        <meta
          name="description"
          content={`${customConfig.blog.author.name}, Author at EnvironmentalJobBoards's Blog`}
        />
        <meta name="keywords" content={"environmentaljobboards.com"} />
        <link
          rel="canonical"
          href={`https://environmentaljobboards.com/blog/author/sabyr`}
        />
        <meta
          property="og:title"
          content={`Sabyr Nurgaliyev, Author at EnvironmentalJobBoards's Blog`}
        />
        <meta
          property="og:description"
          content={`${customConfig.seo.description}`}
        />
        <meta
          property="og:url"
          content={`https://environmentaljobboards.com/blog/author/sabyr`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <BlogHeader />
      <main className="min-h-screen max-w-6xl mx-auto p-8">
        <section className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-24 md:mb-32">
          <div>
            <p className="text-xs uppercase tracking-wide text-base-content/80 mb-2">
              Authors
            </p>
            <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2">
              {customConfig.blog.author.name}
            </h1>
            <p className="md:text-lg mb-6 md:mb-10 font-medium">
              Creator of EnvironmentalJobBoards
            </p>
            <p className="md:text-lg text-base-content/80">
              {customConfig.blog.author.description}
            </p>
          </div>
          <div className="max-md:order-first flex md:flex-col gap-4 shrink-0">
            <Image
              src={"/Sabyr_Nurgaliyev.webp"}
              alt={`Sabyr Nurgaliyev - EnvironmentalJobBoards Founder`}
              width={256}
              height={256}
              className="rounded-2xl"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="https://x.com/tech_nurgaliyev"
                target="_blank"
                title="X tech_nurgaliyev"
                onClick={() => {
                //   plausible("X");
                }}
              >
                <Image
                  src={"/x.png"}
                  alt="X"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samat-n-43b4a822a/"
                target="_blank"
                title="Linkedin sabyr-nurgaliyev"
                onClick={() => {
                //   plausible("LINKEDIN");
                }}
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer bgColor={"bg-slate-200"} />
      </footer>
    </div>
  );
}

export default Sabyr;
