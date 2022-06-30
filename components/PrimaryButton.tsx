import React from 'react';

import styles from 'styles/components/primaryButton.module.scss';

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const defaultProps = {
  className: '',
  disabled: false,
  loading: false,
};

export const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
  text,
  className,
  disabled,
  loading,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.primaryButton} ${className}  ${
      loading ? styles['primaryButton--loading'] : ''
    } $`}
    disabled={disabled}
    {...props}
  >
    {text}
  </button>
);

PrimaryButton.defaultProps = defaultProps;
