import {
    TOGGLE_SIDEBAR,
    GET_JOBS,
    CHANGE_JOB_TOGGLE_STATUS,
    REMOVE_JOB_IN_ACTIVE,
    ADD_TRUCK_TO_LIST,
    REMOVE_TRUCK_FROM_LIST,
    ORDER_LIST,
    UPDATE_JOB
} from '../constants';
import { createAction } from 'redux-actions';

export const toggleSideBarAction = createAction(TOGGLE_SIDEBAR);
export const getJobsAction = createAction(GET_JOBS);
export const orderListAction = createAction(ORDER_LIST);
export const changeJobToggleStatusAction = createAction(CHANGE_JOB_TOGGLE_STATUS);
export const removeJobInActiveAction = createAction(REMOVE_JOB_IN_ACTIVE);
export const addTruckToListAction = createAction(ADD_TRUCK_TO_LIST);
export const removeTruckFromListAction = createAction(REMOVE_TRUCK_FROM_LIST);
export const updateJobAction = createAction(UPDATE_JOB);