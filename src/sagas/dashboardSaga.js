import { call, put, takeEvery } from 'redux-saga/effects';
import {
    TOGGLE_SIDEBAR,
    TOGGLE_SIDEBAR_SUCCEEDED,
    TOGGLE_SIDEBAR_FAILED,
    GET_JOBS,
    GET_JOBS_SUCCEEDED,
    GET_JOBS_FAILED,
    CHANGE_JOB_TOGGLE_STATUS,
    CHANGE_JOB_TOGGLE_STATUS_SUCCEEDED,
    CHANGE_JOB_TOGGLE_STATUS_FAILED,
    REMOVE_JOB_IN_ACTIVE,
    REMOVE_JOB_IN_ACTIVE_SUCCEEDED,
    REMOVE_JOB_IN_ACTIVE_FAILED
} from '../constants';
import JobService from '../api/JobService';

function* toggleSideBarAsync(action) {
    try {
        yield put({ type: TOGGLE_SIDEBAR_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: TOGGLE_SIDEBAR_FAILED, message: e.message });
    }
}

function* getJobsAsync(action) {
    try {
        const jobs = yield call(JobService.fetchJobs);
        yield put({ type: GET_JOBS_SUCCEEDED, payload: jobs.data });
    } catch (e) {
        yield put({ type: GET_JOBS_FAILED, message: e.message });
    }
}

function* changeJobToggleStatusAsync(action) {
    try {
        yield put({ type: CHANGE_JOB_TOGGLE_STATUS_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: CHANGE_JOB_TOGGLE_STATUS_FAILED, message: e.message });
    }
}

function* removeJobInActiveAsync(action) {
    try {
        yield put({ type: REMOVE_JOB_IN_ACTIVE_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: REMOVE_JOB_IN_ACTIVE_FAILED, message: e.message });
    }
}

export function* watchToggleSideBarAsync() {
    yield takeEvery(TOGGLE_SIDEBAR, toggleSideBarAsync);
}

export function* watchGetJobsAsync() {
    yield takeEvery(GET_JOBS, getJobsAsync);
}

export function* watchChangeJobToggleStatusAsync() {
    yield takeEvery(CHANGE_JOB_TOGGLE_STATUS, changeJobToggleStatusAsync);
}

export function* watchRemoveJobInActiveAsync() {
    yield takeEvery(REMOVE_JOB_IN_ACTIVE, removeJobInActiveAsync);
}