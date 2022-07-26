import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { en, pl } from 'locales';
import { ScrollDown, SocialMedia } from 'components/common';
import { images } from 'assets/images';

import styles from 'styles/components/sections/hero.module.scss';

export const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;

  const splittedHeading = t.home.hero.heading.split('\n');

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          <span
            className={`${styles.heading__line} ${styles['heading__line--bigger']}`}
          >
            {splittedHeading[0]}
          </span>
          <span className={styles.heading__line}>{splittedHeading[1]}</span>
        </h1>
        <ScrollDown />
      </div>
      <div className={styles.heroImage}>
        <Image
          src={images.hero}
          priority
          placeholder="blur"
          alt={t.seo.home.hero.photo}
          width={714}
          height={893}
        />
      </div>
      <div className={styles.hero__socialMedia}>
        <SocialMedia />
      </div>
    </section>
  );
};
