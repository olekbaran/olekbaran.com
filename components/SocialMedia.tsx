import { socialMedia } from 'config';

import styles from 'styles/components/socialMedia.module.scss';

export const SocialMedia = () => (
  <>
    {Object.entries(socialMedia).map((service) => (
      <div key={service[0]}>
        <a
          href={service[1].url}
          target="_blank"
          rel="noreferrer"
          aria-label={service[0]}
          className={styles.icon}
        >
          {service[1].icon}
        </a>
      </div>
    ))}
  </>
);
