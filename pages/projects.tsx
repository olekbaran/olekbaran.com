import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import { en, pl } from 'locales';
import { ProjectCard } from 'components';

import type { IProjects } from 'types';

import styles from 'styles/pages/projects.module.scss';

export const getStaticProps = async () => {
  const url = process.env.HYGRAPH_URL!;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const projectsQuery = gql`
    {
      projects(orderBy: endDate_DESC) {
        localizations(includeCurrent: true) {
          id
          name
          slug
          type
          langLogo {
            url
            fileName
          }
          langUrl
          demo
          gitHub
        }
      }
    }
  `;

  const projectsData = await graphQLClient.request(projectsQuery);
  const { projects } = projectsData;

  return {
    props: {
      projects,
    },
  };
};

interface IProjectsProps {
  projects: IProjects[];
}

const Projects: NextPage<IProjectsProps> = ({ projects }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const url = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`;

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
          <h2 className="heading">{t.projects.heading}</h2>
          <ul className={styles.projectsCards}>
            {projects.map((project) => {
              const tProject =
                locale === 'pl'
                  ? project.localizations[1]
                  : project.localizations[0];

              return (
                <li key={tProject.id}>
                  <ProjectCard project={tProject} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Projects;
