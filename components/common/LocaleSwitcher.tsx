import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from 'styles/components/common/localeSwitcher.module.scss';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const { asPath } = useRouter();
  const { locale, locales, locale: activeLocale } = router;
  const otherLocales = locales!.filter(
    (everyLocale) => everyLocale !== activeLocale
  );

  return (
    <div className={styles.locales}>
      <Link href={asPath} scroll={false}>
        <a
          className={`${styles.locales__locale} ${styles['locales__locale--active']}`}
        >
          {locale}
        </a>
      </Link>
      <div className={styles.locales__pipe} />
      {otherLocales.map((otherLocale) => {
        const { pathname, query } = router;
        return (
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={otherLocale}
            scroll={false}
            key={otherLocale}
          >
            <a className={styles.locales__locale}>{otherLocale}</a>
          </Link>
        );
      })}
    </div>
  );
};
