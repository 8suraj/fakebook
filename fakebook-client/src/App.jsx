import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import {
	Profile,
	Timeline,
	Friend,
	Video,
	Group,
} from './router';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		children: [
			{
				path: 'timeline',
				element: <Timeline />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'friends',
				element: <Friend />,
			},
			{
				path: 'videos',
				element: <Video />,
			},
			{
				path: 'groups',
				element: <Group />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
