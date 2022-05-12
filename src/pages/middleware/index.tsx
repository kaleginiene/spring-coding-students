import { Box, DefaultButton, SectionWrapper, Typography } from 'components';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, postUser } from 'state/thunks';
import { selectUsers } from 'state/selectors';
import { UserPostData } from 'state/types';
import { fetchUsersAction } from 'state/sagasActions';

const MiddleWare: React.FC = () => {
	//ASYNC example
	// let a = 'kilo';
	// let b = 'academy';

	// setTimeout(() => {
	// 	console.log('esu timeoute ' + a);
	// }, 100);

	// console.log(a);
	// console.log(b);
	// a = 'asdasd';

	const dispatch = useDispatch();
	const users = useSelector(selectUsers);

	console.log(users);

	// const [data, setData] = useState();

	//ASYN GET REQUEST
	// const url = 'https://reqres.in/api/users';
	// const getUsers = async () => {
	// 	try {
	// 		const { data }: AxiosResponse = await axios.get(url);
	// 		setData(data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };
	// console.log(data);

	//TODO: fix type problem
	// useEffect(() => {
	// 	dispatch(fetchUsers());
	// }, []);

	// const student: UserPostData = {
	// 	name: 'studentas',
	// 	job: 'dev',
	// };

	// const handlePostButton = (user: UserPostData) => {
	// 	dispatch(postUser(user));
	// };

	//GENERATOR FUNCTION
	// function* generatorExample() {
	// 	yield 'pirmas';
	// 	yield 'antras';
	// 	yield 'trecias';
	// }

	// const generatorValue = generatorExample();
	// console.log(generatorValue);
	// console.log(generatorValue.next());
	// console.log(generatorValue.next());
	// console.log(generatorValue.next());
	// console.log(generatorValue.next());

	//SAGAS DISPATCHING
	useEffect(() => {
		dispatch(fetchUsersAction());
	}, []);

	return (
		<SectionWrapper backgroundColor='primary' minHeight='100vh'>
			<Box>
				<Typography margin='0 0 3rem' textAlign='center' type='h3'>
					Middleware paskaita
				</Typography>

				{/* <DefaultButton onClick={() => handlePostButton(student)}>
					Add user to api
				</DefaultButton> */}
			</Box>
		</SectionWrapper>
	);
};

export default MiddleWare;