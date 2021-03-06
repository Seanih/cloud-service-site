import './styles/Main.scss';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Features from './pages/Features';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Docs from './pages/Docs';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/signup' component={SignUp} />
					<Route path='/features' component={Features} />
					<Route path='/docs' component={Docs} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
