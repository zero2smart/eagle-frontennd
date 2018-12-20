import { handleActions } from 'redux-actions';
import { TOGGLE_SIDEBAR_SUCCEEDED, GET_JOBS_SUCCEEDED } from '../constants';

const initialState = {
    showSideBar: false,
    jobs: [],
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
        })
    },
    initialState
);

export default dashboardReducer;