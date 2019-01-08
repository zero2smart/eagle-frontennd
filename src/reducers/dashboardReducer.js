import { handleActions } from 'redux-actions';
import { TOGGLE_SIDEBAR_SUCCEEDED, GET_JOBS_SUCCEEDED, CHANGE_JOB_TOGGLE_STATUS_SUCCEEDED } from '../constants';

const initialState = {
    showSideBar: false,
    jobs: [],
    jobToggleStatus: [],
    errors: {}
};

const dashboardReducer = handleActions(
    {
        [TOGGLE_SIDEBAR_SUCCEEDED]: (state, action) => ({
            ...state,
            showSideBar: action.payload
        }),
        [GET_JOBS_SUCCEEDED]: (state, action) => ({
            ...state,
            jobs: action.payload
        }),
        [CHANGE_JOB_TOGGLE_STATUS_SUCCEEDED]: (state, action) => {
            let tmp = state.jobToggleStatus;
            tmp[action.payload.index] = action.payload.status;

            return {
                ...state,
                jobToggleStatus: tmp
            };
        }
    },
    initialState
);

export default dashboardReducer;