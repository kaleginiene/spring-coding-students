import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchUsersAction } from './sagasActions';
import { setUsers } from './slice';

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

export function* userSagas() {
	yield takeEvery(fetchUsersAction, fetchUsersSaga);
}
