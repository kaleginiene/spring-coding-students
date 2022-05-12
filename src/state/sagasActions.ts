import { createAction } from '@reduxjs/toolkit';

const fetchUsersPrefix = 'user/GET_USERS';

export const fetchUsersAction = createAction(fetchUsersPrefix);
