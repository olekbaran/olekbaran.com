import Link from 'next/link';
import Image from 'next/image';

import { appRoutes } from 'config';
import { images } from 'assets/images';

import styles from 'styles/components/logotype.module.scss';

export const Logotype = () => (
  <div className={styles.logotype}>
    <Link href={appRoutes.home.slug}>
      <a className={styles.logotype__image}>
        <Image
          src={images.avatar}
          priority
          placeholder="blur"
          alt="Olek Baran - Front-end web developer"
          width={86}
          height={86}
        />
      </a>
    </Link>
    <Link href={appRoutes.home.slug}>
      <a className={styles.logotype__text}>Olek Baran</a>
    </Link>
  </div>
);
