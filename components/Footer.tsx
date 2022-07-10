import { useRouter } from 'next/router';

import { en, pl } from 'locales';
import { Logo, SocialMedia } from 'components';

import styles from 'styles/components/footer.module.scss';

export const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <nav />
      <div className={styles.content}>
        <div className={styles.copyright}>
          <Logo />
          <span className={styles.copyright__text}>
            Copyright © {year} Aleksander Baran. {t.footer.license}
          </span>
        </div>
        <div className={styles.content__socialMedia}>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
