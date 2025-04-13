import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectUser } from '../../redux/auth/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Слишком короткий')
    .max(50, 'Слишком длинный')
    .required('Обязательное поле'),
  number: Yup.string()
    .min(9, 'Слишком короткий')
    .max(12, 'Слишком длинный')
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Не корректный формат номера. Пример: 111-11-11'
    )
    .required('Обязательное поле'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const userName = user?.name;
    if (userName) {
      toast.success(`Добро пожаловать, ${userName}`);
    }
  }, [user]);
  const handleSubmit = (values, form) => {
    const userAction = addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    dispatch(userAction);
    form.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.container}>
        <label className={css.text} htmlFor="name">
          Name
        </label>
        <Field className={css.input} type="text" name="name" id="name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.text} htmlFor="number">
          Number Phone
        </label>
        <Field className={css.input} type="text" name="number" id="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
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
export default ContactForm;
