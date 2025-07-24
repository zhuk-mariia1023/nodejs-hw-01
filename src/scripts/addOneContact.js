import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();

  const newContact = createFakeContact();

  const updatedContacts = [...contacts, newContact];

  await writeContacts(updatedContacts);

  console.log('Новий контакт додано:', newContact);
};

addOneContact();
