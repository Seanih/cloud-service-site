import React from 'react';
import FooterArea from '../components/FooterArea';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
`;

const SignUp = () => {
	return (
		<Container>
			<Nav />
			sign up
			<FooterArea />
		</Container>
	);
};

export default SignUp;
