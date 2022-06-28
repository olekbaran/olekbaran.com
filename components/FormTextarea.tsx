import React from 'react';
import { useField } from 'formik';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import styles from 'styles/components/formTextarea.module.scss';

interface IformTextarea extends TextareaAutosizeProps {
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

export const FormTextarea: React.FunctionComponent<IformTextarea> = ({
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
    <TextareaAutosize
      {...field}
      {...props}
      className={`${styles.textarea} ${className} ${
        disabled ? styles['textarea--disabled'] : ''
      } ${loading ? styles['textarea--loading'] : ''} ${
        isOK ? styles['textarea--ok'] : ''
      } ${
        (meta.error && meta.touched) || error ? styles['textarea--error'] : ''
      }`}
      disabled={disabled}
    />
  );
};

FormTextarea.defaultProps = defaultProps;
