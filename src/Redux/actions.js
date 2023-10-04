const { createAction } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

export const addContacts = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/DELETE');

export const filterContact = createAction('contacts/FILTER');
