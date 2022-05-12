import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserPostData } from './types';

//place url into .env file in your projects
const url = 'https://reqres.in/api/users';

const fetchUsersPrefix = 'user/GET_USERS';
const postUserPrefix = 'user/POST_USER';

export const fetchUsers = createAsyncThunk(fetchUsersPrefix, async () => {
	try {
		const { data }: AxiosResponse = await axios.get(url);
		console.log(data);
		return data;
	} catch (e) {
		console.log(e);
	}
});

export const postUser = createAsyncThunk(
	postUserPrefix,
	async ({ userData }: { userData: UserPostData }, { rejectWithValue }) => {
		try {
			const resp = await axios({
				method: 'post',
				url: url,
				data: userData,
			});
			console.log(resp.data);
		} catch (e) {
			const errRes = (e as AxiosError).response;
			if (errRes) {
				return rejectWithValue(errRes.statusText);
			}
		}
	}
);
