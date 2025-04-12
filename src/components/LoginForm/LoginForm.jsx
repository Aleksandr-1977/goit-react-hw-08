import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .min(7, 'Too short')
    .max(50, 'Too long')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Введите корректный адрес email.'
    )
    .required('Required'),
  password: Yup.string().min(7, 'Too short').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then()
      .catch(() => {
        toast.error(' Not valid !');
      });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form} autoComplete="on">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" id="email" />
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
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              border: '1px solid rgb(45, 90, 236)',
              padding: '16px',
              color: '#00000',
            },
          }}
        />
      </Form>
    </Formik>
  );
};
export default LoginForm;
