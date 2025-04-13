import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Слишком короткий')
    .max(50, 'Слишком длинный')
    .required('Обязательное поле'),
  email: Yup.string()
    .min(7, 'Слишком короткий')
    .max(50, 'Слишком длинный')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Введите корректный адрес email.'
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .min(7, 'Слишком короткий')
    .required('Обязательное поле'),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Добро пожаловать');
      })
      .catch(() => {
        toast.error(' Ошибка !');
      });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form} autoComplete="on">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
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
          Register
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
export default RegistrationForm;
