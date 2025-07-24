import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

(async () => {
  const count = await countContacts();
  console.log('Кількість контактів:', count);
})();
