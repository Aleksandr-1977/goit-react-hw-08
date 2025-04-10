import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log('useEffect run');
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return <b>Loading contacts...</b>;
  }
  console.log(contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <b>Loading...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
