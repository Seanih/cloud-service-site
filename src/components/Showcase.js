import React from 'react';
import ShowcaseCard from './ShowcaseCard';

const Showcase = () => {
	return (
		<div className='showcase'>
			<div className='container grid'>
				<div className='showcase-text'>
					<h1>Easier Deployment</h1>
					<p>
						Deploy web apps of all kinds, from large scale enterprise APIs to
						static websites for individuals. Fill out the form to try a demo of
						our platform
					</p>
					<a href='features component' className='btn btn-outline'>
						Read More
					</a>
				</div>

                <ShowcaseCard />
			</div>
		</div>
	);
};

export default Showcase;
