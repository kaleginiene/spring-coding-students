//REDUX TOOLKIT SLICE
//!!!!!!!!!!!!!!!!TODO: RENAME THIS FILE TO slice.ts!!!!!!!!!!!!!!!!!!!!!!!!!
import { Foods, QuizAnswers, UserState } from './types';
import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';

import { Foodies } from './types';
import { fetchUsers, postUser } from './thunks';

const initialState: UserState = {
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
	users: [],
	status: 'idle',
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
		setUsers: (state, actions: PayloadAction<UserState['users']>) => {
			state.users = actions.payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(
	// 		fetchUsers.fulfilled,
	// 		(state, action: PayloadAction<UserState['users']>) => {
	// 			if (action.payload) {
	// 				state.users = action.payload;
	// 				state.status = 'success';
	// 			}
	// 		}
	// 	);
	// 	builder.addCase(fetchUsers.pending, (state) => {
	// 		state.status = 'loading';
	// 	});
	// 	builder.addCase(fetchUsers.rejected, (state) => {
	// 		state.status = 'error';
	// 	});
	// 	builder.addCase(postUser.fulfilled, (state) => {
	// 		state.status = 'success';
	// 	});
	// },
});

export const { setUsers, setUserData, setQuizAnswers } = userSlice.actions;
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
