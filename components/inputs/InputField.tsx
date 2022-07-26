import React from 'react';

import styles from 'styles/components/inputs/inputField.module.scss';

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  isError?: boolean;
  isOK?: boolean | null;
}

export const InputField: React.FunctionComponent<IInputField> = ({
  isLoading = false,
  isError = false,
  isOK = null,
  className,
  disabled,
  ...props
}) => (
  <input
    className={`${styles.input} ${className} ${
      isLoading ? styles['input--loading'] : ''
    } ${isOK ? styles['input--ok'] : ''} ${
      isError ? styles['input--error'] : ''
    }`}
    disabled={disabled}
    {...props}
  />
);
