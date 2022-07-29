import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import type { ISingleProjects } from 'types';

export const getStaticPaths = async () => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const slugsQuery = gql`
    {
      projects(orderBy: endDate_DESC) {
        slug
      }
    }
  `;

  const projectsData = await graphQLClient.request(slugsQuery);
  const { projects } = projectsData;
  const paths = projects.map((project: any) => ({
    params: { name: project.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const projectQuery = gql`
    {
      project(where: {slug: "${params!.name}"}) {
        localizations(includeCurrent: true) {
          name
          slug
          startDate
          endDate
          type
          langLogo {
            url
            fileName
          }
          langUrl
          demo
          gitHub
          image {
            url
            fileName
          }
          description
          metaDescription
        }
      }
    }
  `;

  const projectData = await graphQLClient.request(projectQuery);
  const { project } = projectData;

  return {
    props: {
      project,
    },
  };
};

interface IProject {
  project: ISingleProjects;
}

const Project: NextPage<IProject> = ({ project }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const tProject =
    locale === 'pl' ? project.localizations[1] : project.localizations[0];
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${appRoutes.projects.slug}/${tProject.slug}`;

  return (
    <>
      <Head>
        <title>{tProject.name + t.seo.project.title}</title>
        <meta name="description" content={tProject.metaDescription} />
        <meta name="language" content={locale} />

        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={tProject.name + t.seo.project.title}
        />
        <meta property="og:description" content={tProject.metaDescription} />

        <meta property="twitter:url" content={url} />
        <meta
          property="twitter:title"
          content={tProject.name + t.seo.project.title}
        />
        <meta
          property="twitter:description"
          content={tProject.metaDescription}
        />
      </Head>
      <main>
        <section>
          <h1 className="heading">{tProject.name}</h1>
        </section>
      </main>
    </>
  );
};

export default Project;
