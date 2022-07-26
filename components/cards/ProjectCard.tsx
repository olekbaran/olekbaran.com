import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { appRoutes } from 'config';

import type { IProjectCard } from 'types';

import styles from 'styles/components/cards/projectCard.module.scss';

interface IProjectCardProps {
  project: IProjectCard;
  isLatestProjectsSection?: boolean;
}

export const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  project,
  isLatestProjectsSection = false,
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
