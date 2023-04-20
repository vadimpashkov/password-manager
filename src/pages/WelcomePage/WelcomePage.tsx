import { FC } from 'react';

import { WelcomeLayout } from '../../layouts';
import { CreateDatabaseLink, SelectDatabaseFile } from '../../components';

export const WelcomePage: FC = () => {
	return (
		<WelcomeLayout>
			<SelectDatabaseFile />
			<CreateDatabaseLink />
		</WelcomeLayout>
	);
};
