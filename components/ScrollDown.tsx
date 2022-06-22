import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { en, pl } from 'locales';

import styles from 'styles/components/scrollDown.module.scss';

export const ScrollDown = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <div className={styles.scrollDown}>
      <div className={styles.scrollAnimation}>
        <motion.div
          className={styles.scrollAnimation__dot}
          animate={{
            scale: [0, 1, 1, 0],
            translateY: [-8, 8],
          }}
          transition={{
            duration: 1.6,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
        />
      </div>
      <p className={styles.scrollDown__text}>{t.home.hero.scroll}</p>
    </div>
  );
};
