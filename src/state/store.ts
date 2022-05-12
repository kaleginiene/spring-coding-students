//REDUX TOOLKIT
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers, CombinedState, AnyAction } from 'redux';
import userSlice from './slice';
import { UserState } from './types';

export interface RootState {
	user: UserState;
	//funnel: FunnelState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
	user: userSlice.reducer,
	//funnel: funnelReducer
	//layouts: layoutsReducer
});

export const rootReducer = (state: any, action: AnyAction) =>
	combinedReducer(state, action);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

//OLD-FASHIONED REDUX
// import { createStore, combineReducers } from 'redux';
// import userReducer from './reducers';

// export const rootReducer = combineReducers({
// 	user: userReducer,
// 	//funnel: funnelReducer
// 	//layouts: layoutsReducer
// });

// const store = createStore(rootReducer);

// export default store;
