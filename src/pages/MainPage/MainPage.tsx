import { FC, useEffect } from 'react';
import { useStore } from '@nanostores/react';

import { databaseStore, getDatabase, getMasterPassword } from '../../store';
import { saveDatabaseFile } from '../../utils';
import { AddPasswordForm } from '../../components';

export const MainPage: FC = () => {
	const database = getDatabase();
	const passwords = database.passwords.map((password) => (
		<div key={password.id}>
			<div>Title: {password.title}</div>
			<div>Login: {password.login}</div>
			<div>Password: {password.password}</div>
		</div>
	));

	useStore(databaseStore);

	return (
		<>
			<AddPasswordForm />
			<div>
				<h2>Passwords</h2>
				<div>{...passwords}</div>
			</div>
			<button onClick={() => saveDatabaseFile(getMasterPassword(), database)}>Download</button>
		</>
	);
};
