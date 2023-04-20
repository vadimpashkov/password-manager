import { AES, enc } from 'crypto-js';

export const decrypt = (encryptionString: string, secretKey: string): string =>
	AES.decrypt(encryptionString, secretKey).toString(enc.Utf8);
