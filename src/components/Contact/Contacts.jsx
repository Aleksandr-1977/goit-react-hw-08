import css from './Contacts.module.css';
import { FcBusinessman } from 'react-icons/fc';
import { FcPhone } from 'react-icons/fc';

const Contacts = ({ contact, delContact }) => {
  return (
    <>
      <div className={css.text}>
        <p className={css.textItem}>
          <FcBusinessman size="20" />
          {contact.name}
        </p>
        <p className={css.textItem}>
          <FcPhone size="20" />
          {contact.number}
        </p>
      </div>

      <button
        type="button"
        className={css.btn}
        onClick={() => delContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contacts;
