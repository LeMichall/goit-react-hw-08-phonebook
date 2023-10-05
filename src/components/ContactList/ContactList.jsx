import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContacts } from 'Redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactListWrapper}>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              className={css.contactListBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
