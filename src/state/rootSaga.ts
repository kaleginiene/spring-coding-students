import { all } from 'redux-saga/effects';
import { userSagas } from './sagas';

export default function* rootSaga(): Generator {
	yield all([userSagas()]);
}
