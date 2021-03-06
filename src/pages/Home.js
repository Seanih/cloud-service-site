import React from 'react';
import Nav from '../components/Nav';
import Showcase from '../components/Showcase';
import Stats from '../components/Stats';
import Cli from '../components/Cli';
import Cloud from '../components/Cloud';
import Languages from '../components/Languages';
import FooterArea from '../components/FooterArea';

const Home = () => {
	return (
		<div>
			<Nav />
			<Showcase />
			<Stats />
			<Cli />
			<Cloud />
			<Languages />
			<FooterArea />
		</div>
	);
};

export default Home;
