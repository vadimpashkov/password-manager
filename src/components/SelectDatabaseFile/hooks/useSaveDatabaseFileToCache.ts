import { useNavigate } from 'react-router-dom';

import { setDatabaseAsEncrypted, setMasterPassword } from '../../../store';

// eslint-disable-next-line no-unused-vars
type UseSaveDatabaseFileToCacheReturns = (databaseAsEncryptedString: string) => void;

export const useSaveDatabaseFileToCache = (): UseSaveDatabaseFileToCacheReturns => {
	const navigate = useNavigate();

	return (databaseAsEncryptedString: string) => {
		/**
		 * Разделим зашифрованную строку на данные БД и мастер паролей
		 * @param databaseEncrypt База данных в зашифрованном виде
		 * @param masterPassword Мастер паролей
		 */
		const [databaseEncrypt, masterPassword] = databaseAsEncryptedString.split('.');

		setDatabaseAsEncrypted(databaseEncrypt);
		setMasterPassword(masterPassword);

		// Перейдем на страницу логина
		navigate('/login');
	};
};
