import React from 'react';

import styles from 'styles/components/cards/contactCard.module.scss';

interface IContactCard {
  heading: string;
  link: string | undefined;
  footer: string | null;
  children: React.ReactNode;
}

export const ContactCard: React.FunctionComponent<IContactCard> = ({
  heading,
  link,
  footer,
  children,
}) => (
  <div className={styles.contactCard}>
    <h3 className={styles.contactCard__heading}>{heading}</h3>
    <div className={styles.contactCard__data}>{children}</div>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={heading}
      className={styles.contactCard__footer}
    >
      {footer}
    </a>
  </div>
);
