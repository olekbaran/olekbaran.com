import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { projectsQuery } from 'queries';
import { ProjectCard } from 'components/cards';

import type { IProjectCard } from 'types';

import styles from 'styles/pages/projects.module.scss';

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

  const projectsData = await graphQLClient.request(
    projectsQuery(locale!, defaultLocale!)
  );
  const { projects }: { projects: IProjectCard[] } = projectsData;

  return {
    props: {
      projects,
    },
  };
};

interface IProjectsProps {
  projects: IProjectCard[];
}

const Projects: NextPage<IProjectsProps> = ({ projects }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${appRoutes.projects.slug}`;

  return (
    <>
      <Head>
        <title>{t.seo.projects.title}</title>
        <meta name="description" content={t.seo.projects.description} />
        <meta name="language" content={locale} />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={t.seo.projects.title} />
        <meta property="og:description" content={t.seo.projects.description} />

        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={t.seo.projects.title} />
        <meta
          property="twitter:description"
          content={t.seo.projects.description}
        />
      </Head>
      <main>
        <section className={styles.projects}>
          <h1 className="heading">{t.projects.heading}</h1>
          <ul className={styles.projects__cards}>
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Projects;
