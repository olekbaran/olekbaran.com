import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import { en, pl } from 'locales';
import { images } from 'assets/images';
import { ScrollDown, SocialMedia } from 'components';
import { technologies } from 'config';

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
        <section className={styles.hero}>
          <div className={styles.text}>
            <h1 className={styles.heading}>
              <span
                className={`${styles.heading__line} ${styles['heading__line--bigger']}`}
              >
                {splittedHeading[0]}
              </span>
              <span className={styles.heading__line}>{splittedHeading[1]}</span>
            </h1>
            <ScrollDown />
          </div>
          <div className={styles.heroImage}>
            <Image
              src={images.hero}
              priority
              placeholder="blur"
              alt={t.seo.home.hero.photo}
              width={714}
              height={893}
            />
          </div>
          <SocialMedia />
        </section>
        <section className={styles.latestProjects} />
        <section className={styles.technologies}>
          <ul className={styles.technologiesList}>
            {Object.entries(technologies).map((technology) => (
              <li key={technology[0]} className={styles.technology}>
                <a
                  href={technology[1].url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={technology[1].name}
                  className={styles.technology__icon}
                >
                  {technology[1].icon}
                </a>
                <span className={styles.technology__name}>
                  {technology[1].name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
