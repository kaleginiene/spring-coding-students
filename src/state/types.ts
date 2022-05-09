import { rootReducer } from './store';

export enum Foods {
	GRYBAI = 'grybukai',
	BURGERIUKAI = 'burgeriuksai',
	CEPAI = 'cepelinai',
	SALDUMYNAI = 'sokoladai',
}

export interface Foodies {
	id: number;
	name: string;
	food: Foods;
}

export interface QuizAnswers {
	question_key: boolean;
	question_key2: string;
	question_key3: number;
}
export interface UserState {
	user_data: Foodies;
	quiz_answers: QuizAnswers; // type of answers keys and values
	// email: string
}

export type AppState = ReturnType<typeof rootReducer>;
