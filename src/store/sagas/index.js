import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import exploreSaga from './exploreSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        exploreSaga()
    ]);
}