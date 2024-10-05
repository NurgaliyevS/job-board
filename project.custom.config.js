import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "environmentaljobboards.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `Environmental Job Boards <noreply@mg.environmentaljobboards.com>`,
    fromAdmin: `Environmental Job Boards <admin@mg.environmentaljobboards.com>`,
    supportEmail: "support@environmentaljobboards.com",
    forwardRepliesTo: "nurgasab@gmail.com",
    noreply: "noreply@mg.environmentaljobboards.com",
  },
  documentTitle: "Environmental Job Boards - Find Environmental Jobs",
  domainWithHttps: "https://environmentaljobboards.com",
  seo: {
    keywords:
      "environmental job boards, conservation job board, green jobs board, jobboard, sustainability job boards, sites to find jobs",
    description:
      "Find jobs in environmental, conservation, natural resources, ecology, wildlife, forestry, botany, marine biology, fisheries, and green sphere.",
    themeColor: "#ffffff",
    applicationName: "Environmental Job Boards",
    og: {
      title: "Environmental Job Board",
      url: "https://environmentaljobboards.com",
      image: "https://environmentaljobboards.com/company_related/og-image.png",
      imageAlt:
        "Environmental Job Boards - Find jobs in environmental, conservation, natural resources, ecology, wildlife, forestry, botany, marine biology, fisheries, and green sphere.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage:
        "https://environmentaljobboards.com/company_related/og-image.png",
    },
  },
  blog: {
    title: "Environmental Job Boards Blog",
    description:
      "Find jobs in environmental, conservation, natural resources, ecology, wildlife, forestry, botany, marine biology, fisheries, and green sphere.",
    canonical: "https://environmentaljobboards.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am creator of Environmental Job Boards, a platform to find environmental jobs. I want to help people to find their dream job in environmental sphere.",
    },
  },
};
