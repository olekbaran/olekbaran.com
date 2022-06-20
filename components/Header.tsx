import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { Logotype } from 'components';

import styles from 'styles/components/header.module.scss';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export const Header = () => {
  const router = useRouter();
  const { asPath } = useRouter();
  const { locale, locales, locale: activeLocale } = router;
  const t = locale === 'en' ? en : pl;
  const otherLocales = locales!.filter(
    (everyLocale) => everyLocale !== activeLocale
  );

  const blogUrl = `https://${process.env.NEXT_PUBLIC_BLOG_DOMAIN}`;

  const [mobileNavShown, setMobileNavShown] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavShown(!mobileNavShown);
  };

  const [headerScrolled, setHeaderScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={`${styles.header} ${
        headerScrolled && !mobileNavShown ? styles['header--scrolled'] : ''
      }`}
    >
      <div className={styles.headerContent}>
        <Logotype />
        <button
          type="button"
          onClick={toggleMobileNav}
          className={styles.mobileNavButton}
        >
          {!mobileNavShown ? (
            <MenuIcon className={styles.mobileNavButton__icon} />
          ) : (
            <XIcon className={styles.mobileNavButton__icon} />
          )}
        </button>
        <nav
          className={`${styles.nav} ${
            mobileNavShown ? styles['nav--visible'] : ''
          }`}
        >
          <ul className={styles.navRoutes}>
            {Object.values(appRoutes).map((route) => (
              <li key={route.slug} className={styles.route}>
                <Link href={route.slug}>
                  <a
                    className={`${styles.route__name} ${
                      router.pathname === route.slug
                        ? styles['route__name--active']
                        : ''
                    }`}
                  >
                    {route.name[locale!]}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <a href={blogUrl} target="_blank" rel="noreferrer">
            <button type="button" className={styles.blogButton}>
              {t.nav.blog}
            </button>
          </a>
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
        </nav>
      </div>
    </header>
  );
};
