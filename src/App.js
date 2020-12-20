import './styles/Main.scss';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import Cli from './components/Cli';
import Cloud from './components/Cloud';
import Languages from './components/Languages';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Showcase />
			<Stats />
			<Cli />
			<Cloud />
			<Languages />
		</div>
	);
}

export default App;
