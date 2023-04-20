import { ReactNode, FC, useRef } from 'react';

import { getFileContentsAsText } from '../../../utils';

import styles from './SelectFileButton.css';

interface SelectFileButtonProps {
	children: ReactNode;
	filesExtension?: string;
	// eslint-disable-next-line no-unused-vars
	onChangeCallback: (fileContentsAsText: string) => void;
}

export const SelectFileButton: FC<SelectFileButtonProps> = ({
	children,
	filesExtension,
	onChangeCallback,
}: SelectFileButtonProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFiles = async () => {
		const file = inputRef.current.files[0];

		try {
			const fileContentsAsText = await getFileContentsAsText(file);

			onChangeCallback(fileContentsAsText);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.wrapper}>
			<label className={styles.button} htmlFor={styles.input} role='button' tabIndex={0}>
				{children}
			</label>
			<input
				className={styles.input}
				id={styles.input}
				name={styles.input}
				type='file'
				accept={filesExtension}
				ref={inputRef}
				onChange={handleFiles}
			/>
		</div>
	);
};
