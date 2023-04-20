import { decrypt } from './decrypt';

import { Database } from '../types';

/**
 * Получить базу данных
 * @param masterPasswordAsSecretKey Мастер паролей в виде секретного ключа (захешированный)
 * @param databaseAsEncryptedString База данных в зашифрованном виде
 * @returns База данных в виде объекта
 */
export const getDatabaseData = (masterPasswordAsSecretKey: string, databaseAsEncryptedString: string): Database => {
	/** Данный БД в виде строки */
	const databaseAsString = decrypt(databaseAsEncryptedString, masterPasswordAsSecretKey);

	// Вернем БД в виде объекта
	return JSON.parse(databaseAsString);
};
