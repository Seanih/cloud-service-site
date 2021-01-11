import React from 'react';
import cloud_image from '../images/cloud.png';
import { Link } from 'react-router-dom';

const Cloud = () => {
	return (
		<section className='cloud bg-primary my-2 py-2'>
			<div className='container grid'>
				<div className='text-center'>
					<h2 className='lg'>Cloud Hosting</h2>
					<p className='lead my-1'>Cloud hosting that's best in class</p>
					<Link to='/features' className='btn btn-dark'>
						Read More
					</Link>
				</div>
				<img src={cloud_image} alt='cloud' />
			</div>
		</section>
	);
};

export default Cloud;
