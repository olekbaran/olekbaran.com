import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { appRoutes } from 'config';

import type { ILatestProject } from 'types';

import styles from 'styles/components/projectSmallCard.module.scss';

interface IProjectSmallCard {
  project: ILatestProject;
  latestProjectsSection?: boolean;
}

const defaultProps = {
  latestProjectsSection: false,
};

export const ProjectSmallCard: React.FunctionComponent<IProjectSmallCard> = ({
  project,
  latestProjectsSection,
}) => {
  const langLogoAlt = project.langLogo.fileName.slice(
    0,
    project.langLogo.fileName.indexOf('.')
  );

  return (
    <Link href={`${appRoutes.projects.slug}/${project.slug}`}>
      <a
        className={`${styles.project} ${
          latestProjectsSection ? styles['project--latestProjectsSection'] : ''
        }`}
      >
        <div className={styles.content}>
          <p className={styles.content__name}>{project.name}</p>
          <p className={styles.content__type}>{project.type}</p>
        </div>
        <div className={styles.technology}>
          <div className={styles.technology__icon}>
            <Image src={project.langLogo.url} layout="fill" alt={langLogoAlt} />
          </div>
        </div>
      </a>
    </Link>
  );
};

ProjectSmallCard.defaultProps = defaultProps;
