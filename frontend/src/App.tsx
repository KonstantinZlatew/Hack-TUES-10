import Login from './components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './components/SignUp'
import Card from './components/Card'
import SideNav from './components/sideNav'
import PlantList from './components/PlantList'
import Wrapper from './components/Wrapper'
import Alert from './components/Alert'
import PlantPage from './components/PlantPage'
import useAuthStore from './stores/authStore'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const router = createBrowserRouter([ 
	{
		path: '/',
		element: <div className='flex'>
					<SideNav/>
					<Wrapper>
						<PlantList/>
					</Wrapper>
				</div>,
		errorElement: <div>Brat 404 situaciq</div>,
	},
	{
		path: '/Login',
		element: <Login/>,
		errorElement: <div>Brat 404 situaciq</div>,
	},
	{
		path: '/Sign-Up',
		element: <SignUp/>,
		errorElement: <div>Brat 404 situaciq</div>,
	},
	{
		path: '/Plants/:plantId',
		element:<Wrapper>
					<PlantPage/>
				</Wrapper>,
		errorElement: <div>Brat 404 situaciq</div>,
	},
]);

function App() {
	const setUser = useAuthStore(state => state.setUser)
	
	useEffect(() => {
		const userStorage = localStorage.getItem("user")
		if (!userStorage) {
			setUser(null)
		} else {
			setUser(JSON.parse(userStorage)) 
		}
	}, [])

  return (<>
			<RouterProvider router={router} />
			<Toaster/>

  			</>);
}

export default App
