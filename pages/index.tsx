import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { latestProjectsQuery, linkedInProfileQuery } from 'queries';
import {
  Hero,
  LatestProjects,
  Technologies,
  Contact,
} from 'components/sections';

import type { IProjectCard, ILinkedInProfile } from 'types';

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const latestProjectsData = await graphQLClient.request(
    latestProjectsQuery(locale!, defaultLocale!)
  );
  const latestProjects: IProjectCard[] = latestProjectsData.projects;

  const linkedInData = await graphQLClient.request(
    linkedInProfileQuery(locale!, defaultLocale!)
  );
  const linkedInProfile: ILinkedInProfile = linkedInData.dev;

  return {
    props: {
      latestProjects,
      linkedInProfile,
    },
  };
};

interface IHomeProps {
  latestProjects: IProjectCard[];
  linkedInProfile: ILinkedInProfile;
}

const Home: NextPage<IHomeProps> = ({ latestProjects, linkedInProfile }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${appRoutes.home.slug}`;

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
        <Hero />
        <LatestProjects latestProjects={latestProjects} />
        <Technologies />
        <Contact linkedInProfile={linkedInProfile} />
      </main>
    </>
  );
};

export default Home;
