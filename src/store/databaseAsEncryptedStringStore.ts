import { atom } from 'nanostores';

export const databaseAsEncryptedStringStore = atom<string>();

export function setDatabaseAsEncrypted(databaseAsEncryptedString: string): void {
	databaseAsEncryptedStringStore.set(databaseAsEncryptedString);
}

export function getDatabaseAsEncrypted(): string {
	return databaseAsEncryptedStringStore.get();
}

export function clearDatabaseAsEncryptedStringStore(): void {
	databaseAsEncryptedStringStore.set('');
	databaseAsEncryptedStringStore.off();
}
