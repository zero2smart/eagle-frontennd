import { all, fork } from 'redux-saga/effects';
import * as dashboardSaga from './dashboardSaga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(dashboardSaga.watchToggleSideBarAsync),
        fork(dashboardSaga.watchGetJobsAsync)
    ]);
}