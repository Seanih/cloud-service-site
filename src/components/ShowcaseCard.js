import React from 'react';
import { motion } from 'framer-motion';

const ShowcaseCard = ({ doneSubmitting }) => {
	return (
		<motion.div
			className='showcase-form card'
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
		>
			<h2>Request A Demo</h2>
			<form onSubmit={doneSubmitting}>
				<div className='form-control'>
					<input type='text' name='name' placeholder='Name' required />
				</div>
				<div className='form-control'>
					<input
						type='text'
						name='company'
						placeholder='Company Name (if applicable)'
					/>
				</div>
				<div className='form-control'>
					<input type='email' name='email' placeholder='Email' required />
				</div>
				<input type='submit' value='Submit' className='btn btn-primary' />
			</form>
		</motion.div>
	);
};

export default ShowcaseCard;
