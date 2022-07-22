import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { appRoutes } from 'config';

import type { ISingleLatestProjectCard } from 'types';

import styles from 'styles/components/projectSmallCard.module.scss';

interface IProjectSmallCard {
  project: ISingleLatestProjectCard;
  isLatestProjectsSection?: boolean;
}

const defaultProps = {
  isLatestProjectsSection: false,
};

export const ProjectSmallCard: React.FunctionComponent<IProjectSmallCard> = ({
  project,
  isLatestProjectsSection,
}) => {
  const langLogoAlt = project.langLogo.fileName.slice(
    0,
    project.langLogo.fileName.indexOf('.')
  );

  return (
    <Link href={`${appRoutes.projects.slug}/${project.slug}`}>
      <a
        className={`${styles.project} ${
          isLatestProjectsSection
            ? styles['project--latestProjectsSection']
            : ''
        }`}
      >
        <div className={styles.content}>
          <h4 className={styles.content__name}>{project.name}</h4>
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
