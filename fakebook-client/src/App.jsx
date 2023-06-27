import { Route, Routes } from 'react-router';
import './App.css';
import { Navbar } from './components';
import { Profile } from './router';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route index element={<Profile />} />
			</Route>
		</Routes>
	);
}

export default App;
