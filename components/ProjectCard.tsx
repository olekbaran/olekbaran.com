import React from 'react';
import Link from 'next/link';

import { appRoutes } from 'config';
import { Icon } from 'assets/icons';

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
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.heading__name}>{project.name}</h3>
          <p className={styles.heading__type}>{project.type}</p>
        </div>
        <div className={styles.content__icon}>
          <Icon />
        </div>
      </div>
    </a>
  </Link>
);
