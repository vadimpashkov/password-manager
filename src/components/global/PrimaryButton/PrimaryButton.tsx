import { ReactNode, FC } from 'react';

import styles from './PrimaryButton.css';

interface PrimaryButtonProps {
	children: ReactNode;
	disabled?: boolean;

	// eslint-disable-next-line no-unused-vars
	onClick?: (...params: any) => void;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, disabled, onClick }: PrimaryButtonProps) => (
	<button className={styles.button} onClick={onClick} disabled={disabled}>
		{children}
	</button>
);
