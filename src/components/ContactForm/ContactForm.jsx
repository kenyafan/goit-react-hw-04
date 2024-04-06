import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const nameFieldId = nanoid();
const telFieldId = nanoid();

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  tel: Yup.string()
    .matches(/^\+?\d[\d-.() ]*$/, "Невірний формат номера телефону")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", tel: "" }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
      }}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={s.input}
        />
        <ErrorMessage className={s.error} component="span" name="username" />

        <label htmlFor={telFieldId}>Number</label>
        <Field type="tel" name="tel" id={telFieldId} className={s.input} />
        <ErrorMessage className={s.error} component="span" name="tel" />
        <button type="submit" className={s.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
