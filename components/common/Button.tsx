import React from 'react';

import styles from 'styles/components/common/button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button: React.FunctionComponent<IButton> = ({
  text,
  variant = 'primary',
  isLoading = false,
  className,
  disabled,
  ...props
}) => (
  <button
    type="button"
    className={`${
      variant === 'secondary' ? styles.secondaryButton : styles.primaryButton
    } ${className}  ${isLoading ? styles['primaryButton--loading'] : ''} $`}
    disabled={disabled}
    {...props}
  >
    {text}
  </button>
);
