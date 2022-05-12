import React, { useEffect, useState } from 'react';

import { Box } from 'components';
import { resolve } from 'path';

import axios from 'axios';

const About: React.FC = () => {
	// const pazadas = new Promise((resolve, reject) => {
	// 	const studentaiMokysisGerai = false;
	// 	if (studentaiMokysisGerai) {
	// 		resolve('valioo!! mokosi studentai!');
	// 	} else {
	// 		reject('pazadukai');
	// 	}
	// });

	// pazadas
	// 	.then((message) => console.log(message))
	// 	.catch((err) => console.log(err));

	// const pirmas1 = new Promise((resolve, reject) =>
	// 	setTimeout(() => resolve('pirmas'), 5000)
	// );
	// const pirmas2 = new Promise((resolve, reject) => resolve('antras'));
	// const pirmas3 = new Promise((resolve, reject) => resolve('trecias'));

	// Promise.race([pirmas1, pirmas2, pirmas3]).then((message) =>
	// 	console.log(message)
	// );
	const [data, setData] = useState();

	const cancelToken = axios.CancelToken.source();

	const url = 'https://reqres.in/api/users';

	interface Student {
		name: string;
		job: string;
		belenka: string;
	}

	const student: Student = {
		name: 'studentas',
		job: 'dev',
		belenka: 'asdasd',
	};

	const createUser = (student: Student) => {
		axios({
			method: 'post',
			url: url,
			data: student,
		})
			.then((res) => console.log(res))
			.catch((err) => err);
	};

	useEffect(() => {
		// fetch(url)
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data))
		// 	.catch((err) => console.log(err));
		axios
			.get(url)
			.then((resp) => console.log(resp))
			.catch((err) => err);
		// axios
		// 	.get(url, { cancelToken: cancelToken.token })
		// 	.then((resp) => console.log(resp))
		// 	.catch((err) => err);
	}, []);

	// cancelToken.cancel('banass');

	return (
		<Box
			width='22rem'
			backgroundColor='accent'
			onClick={() => createUser(student)}
		>
			about
		</Box>
	);
};

export default About;
