import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('Всі контакти видалені.');
};

removeAllContacts();
