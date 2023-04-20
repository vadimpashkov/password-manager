import { MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	clearDatabaseAsEncryptedStringStore,
	getDatabaseAsEncrypted,
	getMasterPassword,
	setDatabase,
} from '../../../store';
import { getDatabaseData, getStringAsSHA512ToHex } from '../../../utils';

type useValidateMasterPasswordReturns = () => void;

export const useValidateMasterPassword = (
	passwordInputRef: MutableRefObject<HTMLInputElement>,
): useValidateMasterPasswordReturns => {
	const navigate = useNavigate();

	return () => {
		const masterPasswordCurrent = passwordInputRef.current.value;
		const masterPasswordStore = getMasterPassword();
		const masterPasswordCurrentAsEncrypted = getStringAsSHA512ToHex(masterPasswordCurrent);

		// Если текущий мастер паролей не совпадает с мастером паролей из стора
		if (masterPasswordCurrentAsEncrypted !== masterPasswordStore) {
			// Прекратим выполнение
			return;
		}

		const databaseAsEncryptedString = getDatabaseAsEncrypted();

		const databaseAsObject = getDatabaseData(masterPasswordStore, databaseAsEncryptedString);

		setDatabase(databaseAsObject);
		clearDatabaseAsEncryptedStringStore();

		// Перейдем на основную страницу
		navigate('/main');
	};
};
