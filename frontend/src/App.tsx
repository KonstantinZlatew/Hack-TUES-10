import Login from './components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './components/SignUp'
import SideNav from './components/sideNav'
import PlantList from './components/PlantList'

const router = createBrowserRouter([ 
	{
		path: '/',
		element: <>
					<NavBar/>
					<SideNav/>
					<PlantList/>
				</>,
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
]);

function App() {
  return (<>
			<RouterProvider router={router} />
  			</>);
}

export default App
