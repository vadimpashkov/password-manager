import { FC, useRef } from 'react';

import { PasswordInput, PrimaryButton } from '../../components';

import { generateId } from '../../utils';
import { addPassword, getDatabase } from '../../store';

interface AddPasswordFormProps {}

export const AddPasswordForm: FC<AddPasswordFormProps> = () => {
	const titleInputRef = useRef<HTMLInputElement>();
	const loginInputRef = useRef<HTMLInputElement>();
	const passwordInputRef = useRef<HTMLInputElement>();

	const createPassword = () => {
		const id = generateId();
		const title = titleInputRef.current.value;
		const login = loginInputRef.current.value;
		const password = passwordInputRef.current.value;
		const date = Date.now();

		addPassword({
			id,
			title,
			login,
			folder: 'main',
			password,
			createdAt: date,
			modifiedAt: date,
		});

		titleInputRef.current.value = '';
		loginInputRef.current.value = '';
		passwordInputRef.current.value = '';

		console.log(getDatabase());

		return false;
	};

	return (
		// <form>
		// 	<fieldset>
		// 		<legend>Create Password</legend>
		// 		<input ref={titleInputRef} type='text' placeholder='Enter title' />
		// 		<input ref={loginInputRef} type='text' placeholder='Enter login' />
		// 		<PasswordInput ref={passwordInputRef} placeholder='Enter password' />
		// 		<PrimaryButton onClick={createPassword}>Create</PrimaryButton>
		// 	</fieldset>
		// </form>

		<>
			<input ref={titleInputRef} type='text' placeholder='Enter title' />
			<input ref={loginInputRef} type='text' placeholder='Enter login' />
			<PasswordInput ref={passwordInputRef} placeholder='Enter password' />
			<PrimaryButton onClick={createPassword}>Create</PrimaryButton>
		</>
	);
};
