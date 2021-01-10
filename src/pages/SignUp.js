import React from 'react';
import FooterArea from '../components/FooterArea';
import Nav from '../components/Nav';
import ShowcaseCard from '../components/ShowcaseCard';
import sunset from '../images/sunset.jpg';

const SignUp = () => {
	return (
		<>
			<Nav />
			<div
				style={{
					height: '75vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: `url(${sunset})`,
				}}
			>
				<ShowcaseCard />
			</div>
			<FooterArea />
		</>
	);
};

export default SignUp;
