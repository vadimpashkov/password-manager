import { SHA512, enc } from 'crypto-js';

export const getStringAsSHA512ToHex = (hashString: string): string => SHA512(hashString).toString(enc.Hex);
