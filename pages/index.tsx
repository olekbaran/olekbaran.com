import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { config } from 'config';
import { en, pl } from 'locales';

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const url = `https://${config.domain}${router.pathname}`;

  return (
    <div>
      <Head>
        <title>{t.seo.home.title}</title>
        <meta name="description" content={t.seo.home.description} />
        <meta name="language" content={locale} />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={t.seo.home.title} />
        <meta property="og:description" content={t.seo.home.description} />

        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={t.seo.home.title} />
        <meta property="twitter:description" content={t.seo.home.description} />
      </Head>
      <h1>{t.helloWorld}</h1>
    </div>
  );
};

export default Home;
