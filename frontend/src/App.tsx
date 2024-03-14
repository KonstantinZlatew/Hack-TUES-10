import './App.css'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './components/SignUp'

const router = createBrowserRouter([ 
	{
		path: '/',
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
//   return (<>
// 			<RouterProvider router={router} />
//   			</>);
}

export default App
