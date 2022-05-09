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

export interface UserState {
	user_data: Foodies;
	quiz_answers: object; // type of answers keys and values
}

export type AppState = ReturnType<typeof rootReducer>;
