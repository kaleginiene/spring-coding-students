import React from 'react';

import { H1, SectionWrapper } from '../../components';
import { theme } from '../../styles/theme';

const Home = () => {
	return (
		<SectionWrapper as='form'>
			<H1 color={theme.colors.secondary} textAlign='center'>
				Home page
			</H1>
		</SectionWrapper>
	);
};

export default Home;
