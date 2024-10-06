import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JobList from "@/components/JobList";
import Main from "@/components/Main";
import { customConfig } from "@/project.custom.config";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <header className={nunitoSans.className}>
        <Header />
      </header>
      <main className={`flex flex-col min-h-screen mx-auto ${nunitoSans.className} bg-neutral-100`}>
        <Main />
        <JobList />
      </main>
      <footer className={nunitoSans.className}>
        <Footer />
      </footer>
    </>
  );
}
