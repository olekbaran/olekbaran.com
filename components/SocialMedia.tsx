import { socialMedia } from 'config';

import styles from 'styles/components/socialMedia.module.scss';

export const SocialMedia = () => (
  <ul className={styles.socialMedia}>
    {Object.entries(socialMedia).map((service) => (
      <li key={service[0]}>
        <a
          href={service[1].url}
          target="_blank"
          rel="noreferrer"
          aria-label={service[0]}
          className={styles.icon}
        >
          {service[1].icon}
        </a>
      </li>
    ))}
  </ul>
);
