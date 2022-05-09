import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	//funnel: funnelReducer
	//layouts: layoutsReducer
});

const store = createStore(rootReducer);

export default store;
