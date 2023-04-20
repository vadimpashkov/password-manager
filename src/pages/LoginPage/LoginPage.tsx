import { FC, useRef } from 'react';

import { WelcomeLayout } from '../../layouts';
import { LoginButton, PasswordInput } from '../../components';

import { getDatabaseAsEncrypted } from '../../store';

export const LoginPage: FC = () => {
	console.log(getDatabaseAsEncrypted());

	const passwordInputRef = useRef<HTMLInputElement>(null);

	// - Сохраняем время входа в стор (ЛОГИКА ЛОГАУТА ПО ТАЙМЕРУ)

	return (
		<WelcomeLayout>
			<PasswordInput ref={passwordInputRef} placeholder='Enter password' />
			<LoginButton passwordInputRef={passwordInputRef} />
		</WelcomeLayout>
	);
};
