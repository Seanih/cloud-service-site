import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import computer from '../images/cpu.png';

const Showcase = () => {
	const slideLeft = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<div className='showcase'>
			<div className='container grid'>
				<div className='showcase-text'>
					<h1>Easier Deployment</h1>
					<p>
						Deploy web apps of all kinds, from large scale enterprise APIs to
						static websites for individuals. Please sign up to try a demo of our
						platform!
					</p>
					<Link className='btn btn-outline' to='/signup'>
						Sign Up
					</Link>
				</div>
				<motion.img
					src={computer}
					alt='computer'
					className='computer_pic'
					variants={slideLeft}
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.5 }}
				/>
			</div>
		</div>
	);
};

export default Showcase;
