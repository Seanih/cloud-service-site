import React from 'react';
import { motion } from 'framer-motion';
import thumbs_up from '../images/thumbs-up.png';

const Confirmation = () => {
	return (
		<motion.div
			className='showcase-form card'
			style={{ textAlign: 'center' }}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
		>
			<h1 style={{ color: 'blue', fontWeight: 'bold' }}>
				Thanks for your submission!
			</h1>
			<h3>Please check your email for further instructions.</h3>
			<img src={thumbs_up} alt='thumbs up' />
		</motion.div>
	);
};

export default Confirmation;
