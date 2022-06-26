import { useRouter } from 'next/router';
import { Formik, FormikHelpers, Form } from 'formik';
import { object, string } from 'yup';

import { en, pl } from 'locales';
import { FormInputField, FormTextarea, PrimaryButton } from 'components';

import styles from 'styles/components/contactForm.module.scss';

interface IformValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Validation = object().shape({
  name: string().required(),
  email: string()
    .required()
    .matches(/^\S+@\S+\.\S+$/),
  subject: string().required(),
  message: string().required(),
});

const handleSubmit = (
  values: IformValues,
  { resetForm }: FormikHelpers<IformValues>
) => {
  console.log(values);
  resetForm();
};

export const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      onSubmit={handleSubmit}
      validationSchema={Validation}
    >
      <Form className={styles.form}>
        <h3 className={styles.form__heading}>{t.contactForm.heading}</h3>
        <FormInputField
          type="text"
          name="name"
          placeholder={t.contactForm.placeholders.name}
          className={styles.form__input}
        />
        <FormInputField
          type="text"
          name="email"
          placeholder={t.contactForm.placeholders.email}
          className={styles.form__input}
        />
        <FormInputField
          type="text"
          name="subject"
          placeholder={t.contactForm.placeholders.subject}
          className={styles.form__input}
        />
        <FormTextarea
          name="message"
          placeholder={t.contactForm.placeholders.message}
          className={styles.form__textarea}
        />
        <PrimaryButton
          type="submit"
          text={t.contactForm.send}
          className={styles.form__submitButton}
        />
      </Form>
    </Formik>
  );
};
