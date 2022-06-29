import React from 'react';

import styles from 'styles/components/primaryButton.module.scss';

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  isOK?: boolean | null;
}

const defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  error: false,
  isOK: null,
};

export const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
  text,
  className,
  disabled,
  loading,
  error,
  isOK,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.primaryButton} ${className} ${
      disabled ? styles['primaryButton--disabled'] : ''
    } ${loading ? styles['primaryButton--loading'] : ''} ${
      error ? styles['primaryButton--error'] : ''
    } ${isOK ? styles['primaryButton--ok'] : ''}`}
    disabled={disabled}
    {...props}
  >
    {text}
  </button>
);

PrimaryButton.defaultProps = defaultProps;
