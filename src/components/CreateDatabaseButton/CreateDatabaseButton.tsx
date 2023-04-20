import { FC } from 'react';

import { PrimaryButton } from '../../components';

import { useCreateDatabaseFileToCache } from './hooks';

interface CreateDatabaseButtonProps {
	masterPassword: string;
	disabled: boolean;
}

export const CreateDatabaseButton: FC<CreateDatabaseButtonProps> = ({
	masterPassword,
	disabled,
}: CreateDatabaseButtonProps) => {
	const createDatabase = useCreateDatabaseFileToCache(masterPassword);

	return (
		<PrimaryButton disabled={disabled} onClick={createDatabase}>
			Create
		</PrimaryButton>
	);
};
