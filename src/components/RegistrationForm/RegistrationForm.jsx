import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
// import { useDispatch } from 'react-redux';
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
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
