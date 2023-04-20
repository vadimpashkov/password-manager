import { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { WelcomePage, LoginPage, CreateDatabasePage, MainPage } from './pages';

export const App: FC = () => (
	<HashRouter>
		<Routes>
			<Route path='/' element={<WelcomePage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/create-database' element={<CreateDatabasePage />} />
			<Route path='/main' element={<MainPage />} />
		</Routes>
	</HashRouter>
);
