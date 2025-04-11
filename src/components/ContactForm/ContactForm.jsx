import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Too short')
    .max(12, 'Too long')
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Invalid number format. Example: 111-11-11'
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, form) => {
    console.log(values);
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
      </Form>
    </Formik>
  );
};
export default ContactForm;
