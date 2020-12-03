import React from 'react';

const ShowcaseCard = () => {
	return (
		<div className='showcase-form card'>
			<h2>Request A Demo</h2>
			<form>
				<div className='form-control'>
					<input type='text' name='name' placeholder='Name' required />
				</div>
				<div className='form-control'>
					<input
						type='text'
						name='company'
						placeholder='Company Name'
						required
					/>
				</div>
				<div className='form-control'>
					<input type='email' name='email' placeholder='Email' required />
				</div>
				<input type='submit' value='Send' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default ShowcaseCard;
