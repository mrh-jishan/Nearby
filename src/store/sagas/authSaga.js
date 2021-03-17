import { call, put, select, takeEvery } from 'redux-saga/effects';
import { successLogin } from '../actions/authAction';
import { LOGIN } from '../constants';
import { getData, storeData } from './../api';


function* loadTokenSaga() {
    const storage = yield call(getData)
    if (storage) {
        yield put(successLogin(storage.user, storage.token))
    }
}


function* authorizeSaga() {
    const { user, token } = yield select(state => state.auth);
    yield call(storeData, { user: user, token: token })
}



function* logoutSaga() {
    yield call(signOut)
}


export default function* watchAuth() {
    yield call(loadTokenSaga)
    yield takeEvery(LOGIN.AUTH_SUCCESS, authorizeSaga);

    yield takeEvery(LOGIN.LOGOUT, logoutSaga);
}