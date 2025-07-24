import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const stringified = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, stringified, 'utf-8');
  } catch (err) {
    console.error('Помилка запису контактів:', err.message);
  }
};
