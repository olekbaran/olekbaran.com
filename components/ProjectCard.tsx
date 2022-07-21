import React from 'react';
import Link from 'next/link';

import { appRoutes } from 'config';

import type { ISingleProjectCard } from 'types';

import styles from 'styles/components/projectCard.module.scss';

interface IProjectCard {
  project: ISingleProjectCard;
}

export const ProjectCard: React.FunctionComponent<IProjectCard> = ({
  project,
}) => (
  <Link href={`${appRoutes.projects.slug}/${project.slug}`}>
    <a className={styles.project}>
      <div className={styles.content}>{project.name}</div>
    </a>
  </Link>
);
