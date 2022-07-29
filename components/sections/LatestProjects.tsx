import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { en, pl } from 'locales';
import { appRoutes } from 'config';
import { Button } from 'components/common';
import { ProjectCard } from 'components/cards';

import type { IProjectCard } from 'types';

import styles from 'styles/components/sections/latestProjects.module.scss';

interface ILatestProject {
  latestProjects: IProjectCard[];
}

export const LatestProjects: React.FunctionComponent<ILatestProject> = ({
  latestProjects,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;

  return (
    <section className={styles.latestProjects}>
      <h2 className="heading">{t.home.latestProjects.heading}</h2>
      <ul className={styles.projects}>
        {latestProjects.map((project) => (
          <li key={project.id} className={styles.projectWrapper}>
            <ProjectCard project={project} isLatestProjectsSection />
          </li>
        ))}
      </ul>
      <Link href={appRoutes.projects.slug}>
        <a className={styles.latestProjects__seeMore}>
          <Button text={t.home.latestProjects.seeMore} />
        </a>
      </Link>
    </section>
  );
};
