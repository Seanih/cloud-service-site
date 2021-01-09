import React, { useState } from 'react';
import FooterArea from '../components/FooterArea';
import Nav from '../components/Nav';
import ShowcaseCard from '../components/ShowcaseCard';
import sunset from '../images/sunset.jpg';

const SignUp = () => {
	const [submitForm, setSubmitForm] = useState(false);

	const submitted = () => {
		setSubmitForm(true);
		console.log('button clicked');
	};

	return (
		<>
			<Nav />
			<div
				style={{
					height: '65vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: `url(${sunset})`,
				}}
			>
				<ShowcaseCard clicked={submitted} />
			</div>
			<FooterArea />
		</>
	);
};

export default SignUp;
