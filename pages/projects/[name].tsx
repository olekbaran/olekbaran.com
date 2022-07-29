import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { projectsSlugsQuery, projectQuery } from 'queries';
import type { IProjectSlug, ISingleProject } from 'types';

export const getStaticPaths = async () => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const projectsData = await graphQLClient.request(projectsSlugsQuery);
  const { projects }: { projects: IProjectSlug[] } = projectsData;
  const paths = projects.map((project: IProjectSlug) => ({
    params: { name: project.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  defaultLocale,
}) => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const projectData = await graphQLClient.request(
    projectQuery(params!.name!, locale!, defaultLocale!)
  );
  const { project }: { project: ISingleProject } = projectData;

  return {
    props: {
      project,
    },
  };
};

interface IProject {
  project: ISingleProject;
}

const Project: NextPage<IProject> = ({ project }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${appRoutes.projects.slug}/${project.slug}`;

  return (
    <>
      <Head>
        <title>{project.name + t.seo.project.title}</title>
        <meta name="description" content={project.metaDescription} />
        <meta name="language" content={locale} />

        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={project.name + t.seo.project.title}
        />
        <meta property="og:description" content={project.metaDescription} />

        <meta property="twitter:url" content={url} />
        <meta
          property="twitter:title"
          content={project.name + t.seo.project.title}
        />
        <meta
          property="twitter:description"
          content={project.metaDescription}
        />
      </Head>
      <main>
        <section>
          <h1 className="heading">{project.name}</h1>
        </section>
      </main>
    </>
  );
};

export default Project;
