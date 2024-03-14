import './App.css'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import SideNav from './components/sideNav'

const router = createBrowserRouter([ 
	{
		path: '/',
		element: <>
					<NavBar/>
					<SideNav/>
				</>,
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