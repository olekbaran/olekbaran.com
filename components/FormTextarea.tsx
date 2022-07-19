import React from 'react';
import { useField } from 'formik';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

import { Textarea } from 'components';

interface IFormTextarea extends TextareaAutosizeProps {
  name: string;
  isLoading?: boolean;
  isError?: boolean;
  isOK?: boolean | null;
}

const defaultProps = {
  isLoading: false,
  isError: false,
  isOK: null,
};

export const FormTextarea: React.FunctionComponent<IFormTextarea> = ({
  isLoading,
  isError,
  isOK,
  name,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <Textarea
      disabled={disabled}
      isLoading={isLoading}
      isError={!!(isError || (meta.error && meta.touched))}
      isOK={isOK}
      {...field}
      {...props}
    />
  );
};

FormTextarea.defaultProps = defaultProps;
