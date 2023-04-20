import { FC } from 'react';

import { PrimaryButton } from '../../components';

import { useLinkToCreateDatabasePage } from './hooks';

export const CreateDatabaseLink: FC = () => {
	const createDatabase = useLinkToCreateDatabasePage();

	return <PrimaryButton onClick={createDatabase}>Create database</PrimaryButton>;
};
