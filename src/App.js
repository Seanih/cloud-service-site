import './styles/Main.scss';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import Cli from './components/Cli';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Showcase />
			<Stats />
			<Cli />
		</div>
	);
}

export default App;
