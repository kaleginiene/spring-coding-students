import { AppState } from './types';

export const selectUserData = (state: AppState) => state.user.user_data;
export const selectQuizAnswers = (state: AppState) => state.user.quiz_answers;
export const selectUsers = (state: AppState) => state.user.users;
