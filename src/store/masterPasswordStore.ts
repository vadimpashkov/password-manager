import { atom } from 'nanostores';

type MasterPassword = string;

export const masterPasswordStore = atom<MasterPassword>('');

export function setMasterPassword(masterPassword: MasterPassword): void {
	masterPasswordStore.set(masterPassword);
}

export function getMasterPassword(): MasterPassword {
	return masterPasswordStore.get();
}
