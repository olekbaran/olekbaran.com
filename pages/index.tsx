import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import { en, pl } from 'locales';
import {
  Hero,
  LatestProjects,
  Technologies,
  Contact,
} from 'components/sections';

import type { ILatestProjects, ILinkedInProfile } from 'types';

export const getStaticProps = async () => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const latestProjectsQuery = gql`
    {
      projects(orderBy: endDate_DESC, first: 3) {
        localizations(includeCurrent: true) {
          id
          name
          slug
          type
          langLogo {
            url
            fileName
          }
        }
      }
    }
  `;

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

  const latestProjectsData = await graphQLClient.request(latestProjectsQuery);
  const latestProjects = latestProjectsData.projects;

  const linkedInData = await graphQLClient.request(linkedInQuery);
  const linkedInProfile = linkedInData.dev.localizations;

  return {
    props: {
      latestProjects,
      linkedInProfile,
    },
  };
};

interface IHomeProps {
  latestProjects: ILatestProjects[];
  linkedInProfile: ILinkedInProfile[];
}

const Home: NextPage<IHomeProps> = ({ latestProjects, linkedInProfile }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`;

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
