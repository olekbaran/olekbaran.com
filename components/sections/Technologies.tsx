import { technologies } from 'config';

import styles from 'styles/components/sections/technologies.module.scss';

export const Technologies = () => (
  <section className={styles.technologies}>
    <ul className={styles.technologiesList}>
      {Object.entries(technologies).map((technology) => (
        <li key={technology[0]} className={styles.technology}>
          <a
            href={technology[1].url}
            target="_blank"
            rel="noreferrer"
            aria-label={technology[1].name}
            className={styles.technology__icon}
          >
            {technology[1].icon}
          </a>
          <span className={styles.technology__name}>{technology[1].name}</span>
        </li>
      ))}
    </ul>
  </section>
);
