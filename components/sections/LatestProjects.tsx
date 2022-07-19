import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { en, pl } from 'locales';
import { appRoutes } from 'config';
import { ProjectSmallCard, PrimaryButton } from 'components';

import type { ILatestProjects } from 'types';

import styles from 'styles/components/sections/latestProjects.module.scss';

interface ILatestProject {
  latestProjects: ILatestProjects[];
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
        {latestProjects.map((project) => {
          const tProject =
            locale === 'pl'
              ? project.localizations[1]
              : project.localizations[0];

          return (
            <li key={tProject.slug} className={styles.projectWrapper}>
              <ProjectSmallCard project={tProject} isLatestProjectsSection />
            </li>
          );
        })}
      </ul>
      <Link href={appRoutes.projects.slug}>
        <a className={styles.latestProjects__seeMore}>
          <PrimaryButton text={t.home.latestProjects.seeMore} />
        </a>
      </Link>
    </section>
  );
};
