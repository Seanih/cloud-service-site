import React from 'react';
import FooterArea from '../components/FooterArea';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
`;

const Docs = () => {
	return (
		<Container>
			<Nav />
			Docs
			<FooterArea />
		</Container>
	);
};

export default Docs;
