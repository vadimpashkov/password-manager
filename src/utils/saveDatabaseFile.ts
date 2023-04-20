import { encrypt } from './encrypt';
import { autoSaveFile } from './autoSaveFile';

import { Database } from '../types';

/**
 * Сохранить базу данных в файл
 * @param masterPasswordAsSalt Мастер паролей
 * @param database База данных
 */
export const saveDatabaseFile = (masterPasswordAsSalt: string, database: Database): void => {
	/** База данных в виде строки */
	const databaseAsString = JSON.stringify(database);

	/** Зашифрованная база данных */
	const databaseEncrypt = encrypt(databaseAsString, masterPasswordAsSalt);

	/** Зашифрованная строка для файла, содержащая базу данных и мастер паролей (запись через точку) */
	const databaseAsFileData = `${databaseEncrypt}.${masterPasswordAsSalt}`;

	// Сохраним зашифрованную базу данных в файл
	autoSaveFile('database', databaseAsFileData);
};
