import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, FormikHelpers, Form } from 'formik';
import { object, string } from 'yup';

import { en, pl } from 'locales';
import { FormInputField, FormTextarea } from 'components/forms';
import { Button } from 'components/common';
import { sendEmail } from 'services';

import type { IContactForm } from 'types';

import styles from 'styles/components/forms/contactForm.module.scss';

const validation = object().shape({
  name: string().required(),
  email: string()
    .required()
    .matches(/^\S+@\S+\.\S+$/),
  subject: string().required(),
  message: string().required(),
});

export const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;

  const [disableInputs, setDisableInputs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isResponseOK, setIsResponseOK] = useState<boolean | null>(null);

  const handleSubmit = async (
    values: IContactForm,
    { resetForm }: FormikHelpers<IContactForm>
  ) => {
    try {
      setDisableInputs(true);
      setIsLoading(true);
      const res = await sendEmail(values);
      if (res.status === 200) {
        setIsResponseOK(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsResponseOK(null);
        setIsError(false);
        setDisableInputs(false);
        resetForm();
      }, 2000);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={styles.form}>
        <h3 className={styles.form__heading}>{t.contactForm.heading}</h3>
        <FormInputField
          type="text"
          name="name"
          placeholder={t.contactForm.placeholders.name}
          disabled={disableInputs}
          isLoading={isLoading}
          isError={isError}
          isOK={isResponseOK}
        />
        <FormInputField
          type="text"
          name="email"
          placeholder={t.contactForm.placeholders.email}
          disabled={disableInputs}
          isLoading={isLoading}
          isError={isError}
          isOK={isResponseOK}
        />
        <FormInputField
          type="text"
          name="subject"
          placeholder={t.contactForm.placeholders.subject}
          disabled={disableInputs}
          isLoading={isLoading}
          isError={isError}
          isOK={isResponseOK}
        />
        <FormTextarea
          name="message"
          placeholder={t.contactForm.placeholders.message}
          disabled={disableInputs}
          isLoading={isLoading}
          isError={isError}
          isOK={isResponseOK}
        />
        <Button
          type="submit"
          text={t.contactForm.send}
          disabled={disableInputs}
          isLoading={isLoading}
        />
      </Form>
    </Formik>
  );
};
