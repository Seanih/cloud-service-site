import React, { useState } from 'react';
import FooterArea from '../components/FooterArea';
import Nav from '../components/Nav';
import ShowcaseCard from '../components/ShowcaseCard';
import Confirmation from '../components/Confirmation';
import sunset from '../images/sunset.jpg';

const SignUp = () => {
	const [submitForm, setSubmitForm] = useState(false);

	const doneSubmitting = () => setSubmitForm(true);

	return (
		<>
			<Nav />
			<div
				style={{
					height: '77vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: `url(${sunset})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				{submitForm ? (
					<Confirmation />
				) : (
					<ShowcaseCard doneSubmitting={doneSubmitting} />
				)}
			</div>
			<FooterArea />
		</>
	);
};

export default SignUp;
