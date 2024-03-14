import Login from './components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignUp from './components/SignUp'
import Card from './components/Card'
import SideNav from './components/sideNav'
import PlantList from './components/PlantList'
import Wrapper from './components/Wrapper';

const router = createBrowserRouter([ 
	{
		path: '/',
		element: <div className='flex'>
					<SideNav/>
          <Wrapper>
		  	<div className="flex flex-wrap">
			  <Card title="Evergreen oak" imageUrl="https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg" />
			  <Card title="Creeping buttercup" imageUrl="https://bs.plantnet.org/image/o/90746f2a4592ed4dbc6a166234f488654565605e" />
			  <Card title="Beech" imageUrl="https://bs.plantnet.org/image/o/a733221df31a1ff99af03566841744f3b4c6cffe" />
			  <Card title="Slavi" imageUrl="https://img.novini.bg/uploads/news_pictures/2016-24/big/slavi-edva-ne-zaginal-ot-pushkata-na-iliq-pavlov-380946.jpg" />
			  <Card title="Slavi" imageUrl="https://img.novini.bg/uploads/news_pictures/2016-24/big/slavi-edva-ne-zaginal-ot-pushkata-na-iliq-pavlov-380946.jpg" />
			  <Card title="Slavi" imageUrl="https://img.novini.bg/uploads/news_pictures/2016-24/big/slavi-edva-ne-zaginal-ot-pushkata-na-iliq-pavlov-380946.jpg" />
			</div>
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
]);

function App() {
  return (<>
			<RouterProvider router={router} />
  			</>);
}

export default App
