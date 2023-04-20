import { FC } from 'react';

import { SelectFileButton } from '../../components';

import { useSaveDatabaseFileToCache } from './hooks';

export const SelectDatabaseFile: FC = () => {
	const saveDatabase = useSaveDatabaseFileToCache();

	return <SelectFileButton onChangeCallback={saveDatabase}>Select database file</SelectFileButton>;
};
