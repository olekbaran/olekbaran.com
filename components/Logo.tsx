import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { appRoutes } from 'config';
import { en, pl } from 'locales';
import { images } from 'assets/images';

import styles from 'styles/components/logo.module.scss';

export const Logo = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <div className={styles.logo}>
      <Link href={appRoutes.home.slug}>
        <a className={styles.logo__image}>
          <Image
            src={images.avatar}
            priority
            placeholder="blur"
            alt={t.seo.components.images.avatar}
            width={88}
            height={88}
          />
        </a>
      </Link>
      <Link href={appRoutes.home.slug}>
        <a className={styles.logo__text}>Olek Baran</a>
      </Link>
    </div>
  );
};
