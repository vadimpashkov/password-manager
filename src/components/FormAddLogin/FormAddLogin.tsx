import { FC } from 'react';
import { PrimaryButton } from '../global/PrimaryButton';

import styles from './FormAddLogin.css';

export const FormAddLogin: FC = () => (
	<form>
		<input type='text' placeholder='Логин' />
		<input type='text' placeholder='Пароль' />
		<PrimaryButton>Добавить</PrimaryButton>
	</form>
);
