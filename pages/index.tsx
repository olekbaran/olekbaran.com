import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { en, pl } from 'locales';
import { SocialMedia } from 'components';

import styles from 'styles/pages/home.module.scss';

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`;

  const splittedHeading = t.home.hero.heading.split('\n');

  return (
    <>
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
      <main>
        <section>
          <h1 className={styles.heading}>
            <span
              className={`${styles.heading__line} ${styles['heading__line--bigger']}`}
            >
              {splittedHeading[0]}
            </span>
            <span className={styles.heading__line}>{splittedHeading[1]}</span>
          </h1>
          <SocialMedia />
        </section>
      </main>
    </>
  );
};

export default Home;
