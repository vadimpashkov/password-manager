import { AES } from 'crypto-js';

export const encrypt = (encryptionString: string, secretKey: string): string =>
	AES.encrypt(encryptionString, secretKey).toString();
