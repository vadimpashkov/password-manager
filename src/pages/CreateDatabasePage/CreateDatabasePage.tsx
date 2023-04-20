import { FC, useEffect, useRef, useState } from 'react';

import { WelcomeLayout } from '../../layouts';
import { CreateDatabaseButton, PasswordInput } from '../../components';

export const CreateDatabasePage: FC = () => {
	const [permissionToCreate, setPermissionToCreate] = useState<boolean>(false);

	const passwordInputRef = useRef<HTMLInputElement>(null);
	const [passwordValue, setPasswordValue] = useState<string>('');

	const repeatPasswordInputRef = useRef<HTMLInputElement>(null);
	const [repeatPasswordValue, setRepeatPasswordValue] = useState<string>('');

	const onInput = () => {
		const inputRef = event.target as HTMLInputElement;
		const value = inputRef.value;

		inputRef === passwordInputRef.current ? setPasswordValue(value) : setRepeatPasswordValue(value);
	};

	useEffect(() => {
		if (
			passwordValue.trim() !== '' &&
			repeatPasswordValue.trim() !== '' &&
			passwordValue.trim() === repeatPasswordValue.trim()
		) {
			setPermissionToCreate(true);
			return;
		}

		setPermissionToCreate(false);
	}, [passwordValue, repeatPasswordValue]);

	return (
		<WelcomeLayout>
			<PasswordInput ref={passwordInputRef} placeholder='Enter password' onInput={onInput} />
			<PasswordInput ref={repeatPasswordInputRef} placeholder='Repeat password' onInput={onInput} />
			<CreateDatabaseButton disabled={!permissionToCreate} masterPassword={passwordValue} />
		</WelcomeLayout>
	);
};
