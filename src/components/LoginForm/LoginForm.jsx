// import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const ContactSchema = Yup.object().shape({
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

const LoginForm = () => {
  // const dispatch = useDispatch();

  //   const handleSubmit = (values, actions) => {
  //     dispatch(logIn(values));
  //     actions.resetForm();
  //   };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //   onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form} autoComplete="off">
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
