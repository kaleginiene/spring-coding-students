import { createAction } from '@reduxjs/toolkit';
import { UserPostData } from './types';

const fetchUsersPrefix = 'user/GET_USERS';
const postUserDataPrefix = 'user/POST_USER_DATA';

export const fetchUsersAction = createAction(fetchUsersPrefix);
export const postUserDataAction =
	createAction<UserPostData>(postUserDataPrefix);
