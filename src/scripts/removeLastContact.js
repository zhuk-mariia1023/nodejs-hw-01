import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Масив контактів порожній, видаляти нема чого.');
    return;
  }

  const updatedContacts = contacts.slice(0, -1);

  await writeContacts(updatedContacts);

  console.log('Останній контакт видалено.');
};

removeLastContact();
