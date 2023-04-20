import { forwardRef, useState, useRef } from 'react';

interface PasswordInputProps {
	placeholder: string;
	onInput?: () => void;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ placeholder, onInput }, ref) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const currentRef = useRef<HTMLInputElement>(null);

	const toggleShow = () => {
		currentRef.current.type = !showPassword ? 'text' : 'password';
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<input
				ref={(inputRef) => {
					currentRef.current = inputRef;
					typeof ref === 'function' ? ref(inputRef) : (ref.current = inputRef);
				}}
				type='password'
				placeholder={placeholder}
				onInput={onInput}
			/>
			<button onClick={toggleShow}>{showPassword ? 'Hide' : 'Show'}</button>
		</div>
	);
});
