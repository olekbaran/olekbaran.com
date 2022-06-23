import React from 'react';

import styles from 'styles/components/card.module.scss';

interface Icard {
  heading: string;
  link: string | undefined;
  footer: string | null;
  children: React.ReactNode;
}

export const Card: React.FunctionComponent<Icard> = ({
  heading,
  link,
  footer,
  children,
}) => (
  <div className={styles.card}>
    <h3 className={styles.card__heading}>{heading}</h3>
    <div className={styles.card__data}>{children}</div>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={heading}
      className={styles.card__footer}
    >
      {footer}
    </a>
  </div>
);
