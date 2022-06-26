import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { Logotype, LocaleSwitcher } from 'components';

import styles from 'styles/components/header.module.scss';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

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
        <div
          className={`${styles.mobileHeader} ${
            headerScrolled || mobileNavShown
              ? styles['mobileHeader--scrolled']
              : ''
          }`}
        >
          <Logotype />
          <button
            type="button"
            onClick={toggleMobileNav}
            className={styles.mobileNavButton}
            aria-label="menu"
          >
            {!mobileNavShown ? (
              <MenuIcon className={styles.mobileNavButton__icon} />
            ) : (
              <XIcon className={styles.mobileNavButton__icon} />
            )}
          </button>
        </div>
        <nav
          className={`${styles.nav} ${
            mobileNavShown ? styles['nav--visible'] : ''
          }`}
        >
          <ul className={styles.navRoutes}>
            {Object.entries(appRoutes).map((route) => (
              <li key={route[0]} className={styles.route}>
                <Link href={route[1].slug}>
                  <a
                    className={`${styles.route__name} ${
                      router.pathname === route[1].slug
                        ? styles['route__name--active']
                        : ''
                    }`}
                  >
                    {route[1].name[locale!]}
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
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
};
