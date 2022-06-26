import React from 'react';

import styles from 'styles/components/primaryButton.module.scss';

interface IprimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const defaultProps = {
  className: '',
};

export const PrimaryButton: React.FunctionComponent<IprimaryButton> = ({
  text,
  className,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.primaryButton} ${className}`}
    {...props}
  >
    {text}
  </button>
);

PrimaryButton.defaultProps = defaultProps;
