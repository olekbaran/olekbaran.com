import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MotionConfig, motion } from 'framer-motion';

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
        <MotionConfig reducedMotion="user">
          <section>
            <div>
              <h1 className={styles.heading}>
                <span
                  className={`${styles.heading__line} ${styles['heading__line--bigger']}`}
                >
                  {splittedHeading[0]}
                </span>
                <span className={styles.heading__line}>
                  {splittedHeading[1]}
                </span>
              </h1>
              <div className={styles.scrollDown}>
                <div className={styles.scrollAnimation}>
                  <motion.div
                    className={styles.scrollAnimation__dot}
                    animate={{
                      scale: [0, 1, 1, 0],
                      translateY: [-8, 8],
                    }}
                    transition={{
                      duration: 1.6,
                      ease: 'easeInOut',
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                  />
                </div>
                <p className={styles.scrollDown__text}>{t.home.hero.scroll}</p>
              </div>
            </div>
            <SocialMedia />
          </section>
          <section />
        </MotionConfig>
      </main>
    </>
  );
};

export default Home;
