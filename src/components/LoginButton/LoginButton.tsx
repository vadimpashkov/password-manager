import { MutableRefObject, FC } from 'react';

import { PrimaryButton } from '../../components';

import { useValidateMasterPassword } from './hooks';

interface LoginButtonProps {
	passwordInputRef: MutableRefObject<HTMLInputElement>;
}

export const LoginButton: FC<LoginButtonProps> = ({ passwordInputRef }: LoginButtonProps) => {
	const validateMasterPassword = useValidateMasterPassword(passwordInputRef);

	return <PrimaryButton onClick={validateMasterPassword}>Login</PrimaryButton>;
};
