import React from 'react';

import styles from 'styles/components/primaryButton.module.scss';

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

const defaultProps = {
  isLoading: false,
};

export const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
  text,
  isLoading,
  className,
  disabled,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.primaryButton} ${className}  ${
      isLoading ? styles['primaryButton--loading'] : ''
    } $`}
    disabled={disabled}
    {...props}
  >
    {text}
  </button>
);

PrimaryButton.defaultProps = defaultProps;
