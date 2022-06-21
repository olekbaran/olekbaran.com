import { socialMedia } from 'config';

import styles from 'styles/components/socialMedia.module.scss';

export const SocialMedia = () => (
  <ul className={styles.socialMedia}>
    {Object.values(socialMedia).map((service) => (
      <li key={service.url}>
        <a
          href={service.url}
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          {service.icon}
        </a>
      </li>
    ))}
  </ul>
);
