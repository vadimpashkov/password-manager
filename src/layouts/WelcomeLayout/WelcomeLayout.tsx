import { ReactNode, FC } from 'react';

interface WelcomeLayoutProps {
	children: ReactNode;
}

export const WelcomeLayout: FC<WelcomeLayoutProps> = ({ children }: WelcomeLayoutProps) => {
	return <>{children}</>;
};
