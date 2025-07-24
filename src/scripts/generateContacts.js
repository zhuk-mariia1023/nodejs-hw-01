import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const allContacts = [...existingContacts, ...newContacts];

    const dataToWrite = JSON.stringify(allContacts, null, 2);

    await fs.appendFile(PATH_DB, '', 'utf8');
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');

    console.log(`✅ Успішно додано ${number} контактів.`);
  } catch (error) {
    console.error('❌ Помилка додавання контактів до файлу:', error.message);
  }
};

const number = parseInt(process.argv[2]) || 1;
generateContacts(number);
