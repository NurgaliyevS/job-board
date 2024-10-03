import { customConfig } from "@/project.custom.config";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      data-theme={customConfig.colors.theme}
      className="scroll-smooth"
    >
      <Head>
        <meta
          name="keywords"
          // website monitoring, web monitoring, site downtime, website monitoring tools, website uptime monitoring, website monitoring services, site monitoring, server uptime, uptime web hosting, uptime robot alternative
          content={customConfig.seo.keywords}
        />
        <meta
          name="description"
          // Start monitoring in 30 seconds. Get notified by email, and SMS. Monitor your website, and server.
          content={customConfig.seo.description}
        />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* example as EnvironmentalJobBoards without .com */}
        <meta
          name="apple-mobile-web-app-title"
          content={customConfig.seo.applicationName}
        />
        {/* example as EnvironmentalJobBoards without .com */}
        <meta
          name="application-name"
          content={customConfig.seo.applicationName}
        />
        <meta
          property="og:title"
          // example as EnvironmentalJobBoards - Monitor your website, and server
          content={customConfig.seo.og.title}
        />
        <meta
          property="og:description"
          // example as EnvironmentalJobBoards - Monitor your website, and server
          content={customConfig.seo.description}
        />
        {/* example as https://environmentaljobboards.com/ */}
        <meta property="og:url" content={customConfig.domainWithHttps} />
        <meta property="og:type" content="website" />
        {/* example as EnvironmentalJobBoards */}
        <meta
          property="og:site_name"
          content={customConfig.seo.applicationName}
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          // add to public og image and it will be as https://environmentaljobboards.com/og-image.png
          content={customConfig.seo.og.image}
        />
        <meta property="og:image:alt" content={customConfig.seo.og.imageAlt} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="article:author"
          // example as https://x.com/tech_nurgaliyev
          content={customConfig.seo.og.articleAuthor}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={customConfig.seo.og.twitterSite} />
        <meta name="twitter:creator" content="@tech_nurgaliyev" />
        <meta
          name="twitter:title"
          // EnvironmentalJobBoards - Monitor your website, and server
          content={customConfig.seo.og.title}
        />
        <meta
          name="twitter:description"
          // example as Start monitoring in 30 seconds. Get notified by email, and SMS. Monitor your website, and server.
          content={customConfig.seo.description}
        />
        {/* example as https://environmentaljobboards.com/twitter.png */}
        <meta name="twitter:image" content={customConfig.seo.og.twitterImage} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/company_related/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/company_related/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/company_related/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/company_related/favicon-192x192.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/company_related/apple-icon-57x57.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/company_related/apple-icon-60x60.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
