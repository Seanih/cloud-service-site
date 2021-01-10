import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShowcaseCard = ({ clicked }) => {
	const checkFields = event => {
		alert('Thanks for signing up! Please check your email for instructions.');
	};

	return (
		<motion.div
			className='showcase-form card'
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
		>
			<h2>Request A Demo</h2>
			<form onSubmit={checkFields}>
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
