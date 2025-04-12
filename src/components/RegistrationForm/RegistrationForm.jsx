import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: Yup.string()
    .min(7, 'Too short')
    .max(50, 'Too long')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Введите корректный адрес email.'
    )
    .required('Required'),
  password: Yup.string().required('Required'),
});
const RegistrationForm = () => {
  //   const dispatch = useDispatch();

  //   handleSubmit = (values, actions) => {
  //     dispatch(register(values));
  //     actions.resetForm();
  //   };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      //   onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
