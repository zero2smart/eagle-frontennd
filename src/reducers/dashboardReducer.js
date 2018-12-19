import { handleActions } from 'redux-actions';
import { TOGGLE_SIDEBAR_SUCCEEDED } from '../constants';

const initialState = {
    showSideBar: false,
    errors: {}
};

const dashboardReducer = handleActions(
    {
        [TOGGLE_SIDEBAR_SUCCEEDED]: (state, action) => ({
            ...state,
            showSideBar: action.payload
        })
    },
    initialState
);

export default dashboardReducer;