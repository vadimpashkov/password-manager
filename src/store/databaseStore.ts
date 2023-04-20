import { atom } from 'nanostores';

import { Database, PasswordData } from '../types';

export const databaseStore = atom<Database>({
	passwords: [],
});

export function addPassword(passwordData: PasswordData): void {
	const database = databaseStore.get();

	database.passwords.push(passwordData);

	databaseStore.set({ ...database });
}

export function setDatabase(database: Database): void {
	databaseStore.set(database);
}

export function getDatabase(): Database {
	return databaseStore.get();
}
