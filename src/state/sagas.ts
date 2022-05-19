import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchUsersAction, postUserDataAction } from './sagasActions';
import { setStatus, setUsers } from './slice';
import { UserPostData } from './types';

//place url into .env file in your projects
const url = 'https://reqres.in/api/users';

export function* fetchUsersSaga() {
	try {
		const { data }: AxiosResponse = yield axios.get(url);
		yield put(setUsers(data));
	} catch (err) {
		yield console.log(err);
	}
}

export function* postUserInfoSaga({ payload }: PayloadAction<UserPostData>) {
	try {
		const response: AxiosResponse = yield axios({
			method: 'post',
			url,
			data: payload,
		});
		console.log(response);
	} catch (e) {
		const errResp = (e as AxiosError).response;
		if (errResp) {
			yield put(setStatus('error'));
			console.log(errResp);
		}
	}
}

export function* userSagas() {
	yield takeEvery(fetchUsersAction, fetchUsersSaga);
	yield takeEvery(postUserDataAction, postUserInfoSaga);
}
