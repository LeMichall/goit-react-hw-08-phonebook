import { useState } from 'react';
import { addContacts } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContacts({ name: name, number: number }));
    setName('');
    setNumber('');
  };
  const handleChange = e => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'number') setNumber(e.target.value);
  };
  return (
    <div className={css.contactFormWrapper}>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.contactLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.contactLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={css.contactSbmtBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
