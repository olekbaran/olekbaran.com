import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import CopyToClipboard from 'react-copy-to-clipboard';

import { en, pl } from 'locales';
import {
  ScrollDown,
  SocialMedia,
  Technologies,
  Card,
  SecondaryButton,
} from 'components';
import { images } from 'assets/images';
import { IlinkedInProfile } from 'types';

import styles from 'styles/pages/home.module.scss';

export const getStaticProps = async () => {
  const url = process.env.GRAPHCMS_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const linkedInQuery = gql`
    {
      dev(where: { id: "cl1na8orstxm50bt76eqatskf" }) {
        localizations(includeCurrent: true) {
          name
          workplace
          companyLogo {
            url
            fileName
          }
          companyUrl
        }
      }
    }
  `;

  const linkedInData = await graphQLClient.request(linkedInQuery);
  const linkedInProfile = linkedInData.dev.localizations;

  return {
    props: {
      linkedInProfile,
    },
  };
};

interface Ihome {
  linkedInProfile: IlinkedInProfile[];
}

const Home: NextPage<Ihome> = ({ linkedInProfile }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const tLinkkedIn = locale === 'pl' ? linkedInProfile[1] : linkedInProfile[0];
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`;

  const splittedHeading = t.home.hero.heading.split('\n');
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const companyLogoAlt = tLinkkedIn.companyLogo.fileName.slice(
    0,
    tLinkkedIn.companyLogo.fileName.indexOf('.')
  );

  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

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
        <section className={styles.latestProjects}>
          <h2 className="heading">{t.home.latestProjects.heading}</h2>
        </section>
        <section className={styles.technologies}>
          <Technologies />
        </section>
        <section className={styles.contact}>
          <h2 className="heading">{t.home.contact.heading}</h2>
          <div className={styles.contactCards}>
            <Card
              heading={t.home.contact.linkedIn.heading}
              link={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              footer={t.home.contact.linkedIn.footer}
            >
              <div className={styles.linkedIn}>
                <div className={styles.profile}>
                  <div className={styles.profile__image}>
                    <Image
                      src={images.avatar}
                      placeholder="blur"
                      alt={t.seo.components.images.avatar}
                      width={88}
                      height={88}
                    />
                  </div>
                  <span className={styles.profile__name}>
                    {tLinkkedIn.name}
                  </span>
                </div>
                <div className={styles.workplace}>
                  <a
                    href={tLinkkedIn.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={companyLogoAlt}
                    className={styles.workplace__logo}
                  >
                    <Image
                      src={tLinkkedIn.companyLogo.url}
                      layout="fill"
                      alt={companyLogoAlt}
                    />
                  </a>
                  <span className={styles.workplace__name}>
                    {tLinkkedIn.workplace}
                  </span>
                </div>
              </div>
            </Card>
            <Card
              heading={t.home.contact.email.heading}
              link={`mailto:${email}`}
              footer={t.home.contact.email.footer}
            >
              <div className={styles.email}>
                <address className={styles.address}>
                  <span className={styles.address__name}>
                    {email?.split('@')[0]}
                  </span>
                  <span className={styles.address__domain}>
                    @{email?.split('@')[1]}
                  </span>
                </address>
              </div>
              <CopyToClipboard text={email!} onCopy={onCopyText}>
                <SecondaryButton
                  text={`${
                    isCopied
                      ? t.home.contact.email.copied
                      : t.home.contact.email.copy
                  }`}
                />
              </CopyToClipboard>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
