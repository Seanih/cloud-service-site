import React from 'react';
import cli_pic from '../images/cli.png';

const Cli = () => {
	return (
		<section className='cli'>
			<div className='container grid'>
				<img src={cli_pic} alt='WTF' />
				<div className='card'>
					<h3>Easy to use, cross-platform CLI</h3>
				</div>
				<div className='card'>
					<h3>Deploy in seconds!</h3>
				</div>
			</div>
		</section>
	);
};

export default Cli;
