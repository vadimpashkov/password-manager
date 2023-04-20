type StringToHashAndIv = string;
type NumberToHashAndIv = string;

/** Папки создает сам пользователь */
export type Folder = string;

type DateToTimestamp = number;

enum TYPES_FIELD {
	text = 'text',
	password = 'password',
	phone = 'phone',
	email = 'email',
	totp = 'totp',
}

interface Data {
	id: string;
	title: string;
	folder: Folder;
	favorite?: boolean;
	additionalFields?: AdditionalField[];
	createdAt: DateToTimestamp;
	modifiedAt: DateToTimestamp;
}

interface AdditionalField {
	title: string;
	type: TYPES_FIELD;
}

export interface PasswordData extends Data {
	login?: StringToHashAndIv;
	password: StringToHashAndIv;
	website?: string;
}

export interface CardData extends Data {
	cardNumber: NumberToHashAndIv;
	validityPeriod: StringToHashAndIv;
	holderData: StringToHashAndIv;
	cvv: NumberToHashAndIv;
}

export interface Database {
	passwords: PasswordData[];
	cards?: CardData[];
}
