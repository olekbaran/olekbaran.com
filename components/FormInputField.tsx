import React from 'react';
import { useField } from 'formik';

import styles from 'styles/components/formInputField.module.scss';

interface IformInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

const defaultProps = {
  className: '',
};

export const FormInputField: React.FunctionComponent<IformInputField> = ({
  name,
  className,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <input
      {...field}
      {...props}
      className={`${styles.input} ${className} ${
        meta.error && meta.touched ? styles['input--error'] : ''
      }`}
    />
  );
};

FormInputField.defaultProps = defaultProps;
