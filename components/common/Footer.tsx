import React from 'react';
import { useRouter } from 'next/router';

import { en, pl } from 'locales';
import { Logo, SocialMedia } from 'components/common';

import styles from 'styles/components/common/footer.module.scss';

export const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <Logo />
          <span className={styles.copyright__text}>
            Copyright © {year} Aleksander Baran.{' '}
            <span className={styles['copyright__text--license']}>
              {t.footer.license}
            </span>
          </span>
        </div>
        <div className={styles.content__socialMedia}>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
