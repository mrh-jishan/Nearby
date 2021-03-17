import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { successLogin } from '../actions/authAction';
import { COORDS, LOGIN } from '../constants';
import { getData, removeData, storeData } from './../api';


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
    yield call(removeData)
}


export default function* watchAuth() {
    yield take(COORDS.COORDS_SUCCESS)
    yield call(loadTokenSaga)
    yield takeEvery(LOGIN.AUTH_SUCCESS, authorizeSaga);
    yield takeEvery(LOGIN.LOGOUT, logoutSaga);
}