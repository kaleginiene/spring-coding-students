//REDUX TOOLKIT SLICE
//!!!!!!!!!!!!!!!!TODO: RENAME THIS FILE TO slice.ts!!!!!!!!!!!!!!!!!!!!!!!!!
import { Foods, QuizAnswers } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Foodies } from './types';

const initialState = {
	user_data: {
		id: null as unknown as number,
		name: '',
		food: null as unknown as Foods,
	},
	quiz_answers: {
		question_key: false,
		question_key2: '',
		question_key3: null as unknown as number,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, actions: PayloadAction<Foodies>) => {
			state.user_data = actions.payload;
		},
		setQuizAnswers: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
			state.quiz_answers = {
				...state.quiz_answers,
				...actions.payload,
			};
		},
	},
});

export const { setUserData, setQuizAnswers } = userSlice.actions;
export default userSlice;

//OLD-FASHIONED REDUCER
// import { Foods } from './types';
// import { AnyAction } from 'redux';
// import { SET_QUIZ_ANSWERS, SET_USER_DATA } from './constants';

// const initialState = {
// 	user_data: {
// 		id: null as unknown as number,
// 		name: '',
// 		food: null as unknown as Foods,
// 	},
// 	quiz_answers: {
// 		question_key: false,
// 		question_key2: '',
// 		question_key3: null,
// 	},
// };

// const userReducer = (state = initialState, action: AnyAction) => {
// 	switch (action.type) {
// 		case SET_USER_DATA:
// 			return (state.user_data = action.payload);
// 		case SET_QUIZ_ANSWERS:
// 			return (state.quiz_answers = {
// 				...state.quiz_answers,
// 				...action.payload,
// 			});
// 		default:
// 			return state;
// 	}
// };

// export default userReducer;
