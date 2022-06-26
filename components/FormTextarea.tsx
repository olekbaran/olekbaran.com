import React from 'react';
import { useField } from 'formik';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import styles from 'styles/components/formTextarea.module.scss';

interface IformTextarea extends TextareaAutosizeProps {
  name: string;
  className?: string;
}

const defaultProps = {
  className: '',
};

export const FormTextarea: React.FunctionComponent<IformTextarea> = ({
  name,
  className,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <TextareaAutosize
      {...field}
      {...props}
      className={`${styles.textarea} ${className} ${
        meta.error && meta.touched ? styles['textarea--error'] : ''
      }`}
    />
  );
};

FormTextarea.defaultProps = defaultProps;
