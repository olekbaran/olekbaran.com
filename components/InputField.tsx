import React from 'react';

import styles from 'styles/components/inputField.module.scss';

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  isError?: boolean;
  isOK?: boolean | null;
}

const defaultProps = {
  isLoading: false,
  isError: false,
  isOK: null,
};

export const InputField: React.FunctionComponent<IInputField> = ({
  isLoading,
  isError,
  isOK,
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

InputField.defaultProps = defaultProps;
