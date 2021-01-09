import React from 'react';
//import ShowcaseCard from './ShowcaseCard';
import computer from '../images/cpu.png';

const Showcase = () => {
	return (
		<div className='showcase'>
			<div className='container grid'>
				<div className='showcase-text'>
					<h1>Easier Deployment</h1>
					<p>
						Deploy web apps of all kinds, from large scale enterprise APIs to
						static websites for individuals.
					</p>
					<a href='features component' className='btn btn-outline'>
						Read More
					</a>
				</div>
				<img src={computer} alt='computer' className='computer_pic' />
				{/* <ShowcaseCard /> */}
			</div>
		</div>
	);
};

export default Showcase;
