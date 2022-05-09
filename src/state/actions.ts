import { SET_QUIZ_ANSWERS, SET_USER_DATA } from './constants';
import { Foodies } from 'state/types';

//action creator
export const setUserData = (userData: Foodies) => ({
	type: SET_USER_DATA,
	payload: userData,
});

export const setQuizAnswers = (answers: object) => ({
	type: SET_QUIZ_ANSWERS,
	payload: answers,
});
