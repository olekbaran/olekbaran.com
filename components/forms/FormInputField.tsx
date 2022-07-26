import React from 'react';
import { useField } from 'formik';

import { InputField } from 'components/inputs';

interface IFormInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isLoading?: boolean;
  isError?: boolean;
  isOK?: boolean | null;
}

export const FormInputField: React.FunctionComponent<IFormInputField> = ({
  isLoading = false,
  isError = false,
  isOK = null,
  name,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <InputField
      disabled={disabled}
      isLoading={isLoading}
      isError={!!(isError || (meta.error && meta.touched))}
      isOK={isOK}
      {...field}
      {...props}
    />
  );
};
