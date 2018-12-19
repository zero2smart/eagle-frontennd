import { call, put, takeEvery } from 'redux-saga/effects';
import {
    TOGGLE_SIDEBAR,
    TOGGLE_SIDEBAR_SUCCEEDED,
    TOGGLE_SIDEBAR_FAILED
} from '../constants';

function* toggleSideBarAsync(action) {
    try {
        yield put({ type: TOGGLE_SIDEBAR_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: TOGGLE_SIDEBAR_FAILED, message: e.message });
    }
}

export function* watchToggleSideBarAsync() {
    yield takeEvery(TOGGLE_SIDEBAR, toggleSideBarAsync);
}

