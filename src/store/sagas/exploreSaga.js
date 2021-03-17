import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { errorExplore, successExplore } from '../actions/exploreAction';
import { COORDS, EXPLORE } from '../constants';
import { explore } from './../api';

function* initLoadExplore() {
    try {
        const { token } = yield select(state => state.auth);
        const { coords } = yield select(state => state.coords);
        const { data } = yield call(explore, { coords: [coords.latitude, coords.longitude], radius: 500 }, token)
        yield put(successExplore(data))
    } catch (e) {
        yield put(errorExplore('Sorry! Something went wrong...'))
    }
}

export default function* watchExplore() {
    yield take(COORDS.COORDS_SUCCESS)
    yield takeEvery(EXPLORE.EXPLORE_INIT, initLoadExplore);
}