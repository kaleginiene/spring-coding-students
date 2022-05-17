//REDUX TOOLKIT
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import userSlice from "./slice";
import { UserState } from "./types";
import { persistReducer, persistStore } from "redux-persist";

export interface RootState {
  user: UserState;
  //funnel: FunnelState;
}

//redux reducers
const combinedReducer = combineReducers<CombinedState<RootState>>({
  user: userSlice.reducer,
  //funnel: funnelReducer
  //layouts: layoutsReducer
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// persist reducer

const persistConfig = {
  key: "user_data",
  storage: sessionStorage,
  blacklist: ["config"],
  whitelist: ["user"], // dedam kratini reduceriu katoegorijos
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// metam poto i store reduceri apvilkta

// persist reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// isideti i savo provideri
export const persistor = persistStore(store);
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
