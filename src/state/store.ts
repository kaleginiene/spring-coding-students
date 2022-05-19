//REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers, CombinedState, AnyAction } from 'redux';
import userSlice from './slice';
import { UserState } from './types';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import sessionStorage from 'redux-persist/es/storage/session';

export interface RootState {
	user: UserState;
	//funnel: FunnelState;
}

//reducers
const combinedReducer = combineReducers<CombinedState<RootState>>({
	user: userSlice,
	//funnel: funnelReducer
	//layouts: layoutsReducer
});

export const rootReducer = (state: any, action: AnyAction) =>
	combinedReducer(state, action);

//persist reducer
const persistConfig = {
	key: 'user_data',
	storage: sessionStorage,
	blacklist: ['config'],
	whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);

//FROM DOCUMENTATION
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

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
