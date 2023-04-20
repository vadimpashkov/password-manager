import { useNavigate } from 'react-router-dom';

type UseCreateDatabaseFileToCacheReturns = () => void;

export const useLinkToCreateDatabasePage = (): UseCreateDatabaseFileToCacheReturns => {
	const navigate = useNavigate();

	return () => {
		// Перейдем на страницу логина
		navigate('/create-database');
	};
};
