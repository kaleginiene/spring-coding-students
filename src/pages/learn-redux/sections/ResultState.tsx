import React from 'react';
import { useSelector } from 'react-redux';

import { Box, SectionWrapper, Typography } from 'components';
import { AppState } from 'state/types';
import { selectUserData } from 'state/selectors';

export const ResultState: React.FC = () => {
	// const userData = useSelector((state: AppState) => state.user);

	const userData = useSelector(selectUserData);

	console.log(userData);
	return (
		<SectionWrapper>
			<Box maxWidth='30rem' margin='0 auto'>
				<Typography color='accent' textAlign='center' type='h3'>
					{userData.name} mėgsta {userData.food}
				</Typography>
			</Box>
		</SectionWrapper>
	);
};
