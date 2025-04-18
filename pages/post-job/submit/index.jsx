import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { customConfig } from "@/project.custom.config";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";
import Pricing from "./Pricing";
import withAuth from "@/components/withAuth";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function SubmitJob(props) {
  return (
    <>
      <Head>
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <header className={nunitoSans.className}>
        <Header />
      </header>
      <main
        className={`flex flex-col min-h-screen mx-auto ${nunitoSans.className} bg-neutral-100`}
      >
        <Pricing />
      </main>
      <footer className={nunitoSans.className}>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(SubmitJob);
