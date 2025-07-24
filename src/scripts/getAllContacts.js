import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts;
};

(async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
})();
