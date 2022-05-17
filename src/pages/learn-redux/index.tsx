import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, DefaultButton, SectionWrapper, Typography } from 'components';
import { theme } from 'styles/theme';
import { AppState, Foodies, Foods } from 'state/types';
// import store from 'state/store';
// import { SET_USER_DATA } from 'state/constants';
import { ResultState } from './sections/ResultState';
import { setUserData } from 'state/slice';
import { selectUserData } from 'state/selectors';
import { useAppDispatch } from 'state/store';

//should be added to constants, but on learning purposes left here
const FOODS: Foodies[] = [
	{
		id: 1,
		name: 'Viktorija',
		food: Foods.GRYBAI,
	},
	{
		id: 2,
		name: 'Vidmis',
		food: Foods.BURGERIUKAI,
	},
	{
		id: 3,
		name: 'Martyna',
		food: Foods.SALDUMYNAI,
	},
	{
		id: 4,
		name: 'Nojus',
		food: Foods.CEPAI,
	},
];

const LearnRedux: React.FC = () => {
	const dispatch = useAppDispatch();
	// const userData = useSelector((state: AppState) => state.user);
	const userData = useSelector(selectUserData);

	console.log(userData);

	const [selectedUser, setSelectedUser] = useState<Foodies>({
		id: null as unknown as number,
		name: '',
		food: null as unknown as Foods,
	});
	//REDUX TOOLKI DISPATCH

	const handleStateButton = () => dispatch(setUserData(selectedUser));

	//OLD-FASHIONED REDUX
	// const handleStateButton = () =>
	// 	dispatch({
	// 		type: SET_USER_DATA,
	// 		payload: selectedUser,
	// 	});

	return (
		<>
			<SectionWrapper backgroundColor='primary' minHeight='80vh'>
				<Box maxWidth='72rem' margin='0 auto'>
					<Typography margin='0 0 3rem' textAlign='center' type='h3'>
						Mokomės Redux
					</Typography>
					{FOODS.map(({ id, name, food }) => (
						<Box
							backgroundColor='secondary'
							key={id}
							padding='0.5rem'
							margin='0 auto 1rem'
							maxWidth='22rem'
							textAlign='center'
							isCursorPointer
							border={
								selectedUser.id === id
									? `2px solid ${theme.colors.accent}`
									: '2px solid transparent'
							}
							onClick={() =>
								setSelectedUser({
									id,
									name,
									food,
								})
							}
						>
							<Typography fontWeight='fw600' margin='0 0 0.5rem'>
								{name}
							</Typography>
							<Typography>{food}</Typography>
						</Box>
					))}
					<DefaultButton
						onClick={handleStateButton}
						margin='0 auto'
						maxWidth='22rem'
					>
						Setinam state
					</DefaultButton>
				</Box>
			</SectionWrapper>
			<ResultState />
		</>
	);
};

export default LearnRedux;
