import css from './ContactList.module.css';
import Contacts from '../Contact/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };
  console.log('Visible contacts:', visibleContacts);
  if (visibleContacts.length === 0)
    return <p className={css.text}>Contact not found</p>;
  else
    return (
      <ul className={css.container}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contacts}>
            <Contacts contact={contact} delContact={handleDelete} />
          </li>
        ))}
      </ul>
    );
};
export default ContactList;
