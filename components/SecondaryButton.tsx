import React from 'react';

import styles from 'styles/components/secondaryButton.module.scss';

interface IsecondaryButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const SecondaryButton: React.FunctionComponent<IsecondaryButton> = ({
  text,
  ...props
}) => (
  <button type="button" className={styles.secondaryButton} {...props}>
    {text}
  </button>
);
