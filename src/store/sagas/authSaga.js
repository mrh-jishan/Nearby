import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { successLogin } from '../actions/authAction';
import LocalStorage from '../api/localStorage';
import { COORDS, LOGIN } from '../constants';

function* loadTokenSaga() {
    const { user, token } = yield call(LocalStorage.get)
    if (user || token) {
        yield put(successLogin(user, token))
    }
}

function* authorizeSaga() {
    const { user, token } = yield select(state => state.auth);
    yield call(LocalStorage.store, { user: user, token: token })
}


function* logoutSaga() {
    yield call(LocalStorage.remove)
}

export default function* watchAuth() {
    yield take(COORDS.COORDS_SUCCESS)
    yield call(loadTokenSaga)
    yield takeEvery(LOGIN.AUTH_SUCCESS, authorizeSaga);
    yield takeEvery(LOGIN.LOGOUT, logoutSaga);
}