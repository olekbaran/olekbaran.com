import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <meta name="author" content="Aleksander Baran" />
      <meta name="copyright" content="Aleksander Baran" />
      <meta
        name="keywords"
        content="Olek Baran, Aleksander Baran, Portfolio website, Front-end, Front-end developer, React developer, React, Next.js"
      />
      <meta name="theme-color" content="#000000" />

      <meta name="rating" content="general" />
      <meta name="rating" content="safe for kids" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="3 days" />

      <link rel="icon" href="/images/favicon.svg" key="favicon" />
      <link
        rel="icon"
        href="/images/favicon.svg"
        color="#00B7CE"
        key="hex favicon"
      />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

      <link rel="manifest" href="/manifest.json" />

      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/seo.png" key="og image" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="/images/seo.png" key="tw image" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
