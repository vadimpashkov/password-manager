import { useNavigate } from 'react-router-dom';
import { setDatabase, setMasterPassword } from '../../../store';
import { getStringAsSHA512ToHex } from '../../../utils';

type UseCreateDatabaseFileToCacheReturns = () => void;

export const useCreateDatabaseFileToCache = (masterPassword: string): UseCreateDatabaseFileToCacheReturns => {
	const navigate = useNavigate();

	return () => {
		const masterPasswordCurrentAsEncrypted = getStringAsSHA512ToHex(masterPassword);
		setMasterPassword(masterPasswordCurrentAsEncrypted);
		setDatabase({
			passwords: [],
		});

		// Перейдем на основную страницу
		navigate('/main');
	};
};
