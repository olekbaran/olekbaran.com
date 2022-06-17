import { Logotype } from 'components';

import styles from 'styles/components/header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Logotype />
  </header>
);
