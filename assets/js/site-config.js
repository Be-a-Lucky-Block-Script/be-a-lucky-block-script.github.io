/**
 * SITE CONFIGURATION
 * Edit this file to update site-wide settings across all pages.
 * No need to touch individual HTML files for these globals.
 */
const SITE_CONFIG = {
  siteName: "Be a Lucky Block Script",
  siteURL: "https://be-a-lucky-block-script.github.io",
  siteDescription: "Get the latest working Be a Lucky Block Script for Roblox. No Key required. Auto Farm, Auto Open, ESP, and more features updated monthly.",
  twitterHandle: "@LuckyBlockScript",
  defaultImage: "/assets/img/og-image.png",
  gameName: "Be a Lucky Block",
  gameURL: "https://www.roblox.com/games/124473577469410/Be-a-Lucky-Block",
  footerLinks: [
    { label: "Privacy Policy", href: "/pages/privacy-policy.html" },
    { label: "Disclaimer", href: "/pages/disclaimer.html" },
    { label: "Terms & Conditions", href: "/pages/terms.html" },
  ],
};

/**
 * THIRD-PARTY CODE INJECTION
 * Paste your Google Analytics, AdSense, or any other scripts here.
 * They will be injected into every page automatically.
 */
const THIRD_PARTY_HEAD = `
  <!-- Google Analytics (replace G-XXXXXXXXXX with your ID) -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script> -->

  <!-- Google AdSense (replace with your publisher ID) -->
  <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
`;

const THIRD_PARTY_BODY_END = `
  <!-- Any body-end scripts go here -->
`;
