import React from 'react';
import { useField } from 'formik';

import styles from 'styles/components/formInputField.module.scss';

interface IFormInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
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

export const FormInputField: React.FunctionComponent<IFormInputField> = ({
  name,
  className,
  disabled,
  loading,
  error,
  isOK,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <input
      {...field}
      {...props}
      className={`${styles.input} ${className} ${
        loading ? styles['input--loading'] : ''
      } ${isOK ? styles['input--ok'] : ''} ${
        (meta.error && meta.touched) || error ? styles['input--error'] : ''
      }`}
      disabled={disabled}
    />
  );
};

FormInputField.defaultProps = defaultProps;
