import React from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import styles from 'styles/components/inputs/textarea.module.scss';

interface ITextarea extends TextareaAutosizeProps {
  isLoading?: boolean;
  isError?: boolean;
  isOK?: boolean | null;
}

export const Textarea: React.FunctionComponent<ITextarea> = ({
  isLoading = false,
  isError = false,
  isOK = null,
  className,
  disabled,
  ...props
}) => (
  <TextareaAutosize
    className={`${styles.textarea} ${className} ${
      isLoading ? styles['textarea--loading'] : ''
    } ${isOK ? styles['textarea--ok'] : ''} ${
      isError ? styles['textarea--error'] : ''
    }`}
    disabled={disabled}
    {...props}
  />
);
