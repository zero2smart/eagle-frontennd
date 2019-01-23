import { TOGGLE_SIDEBAR, GET_JOBS, CHANGE_JOB_TOGGLE_STATUS, REMOVE_JOB_IN_ACTIVE } from '../constants';
import { createAction } from 'redux-actions';

export const toggleSideBarAction = createAction(TOGGLE_SIDEBAR);
export const getJobsAction = createAction(GET_JOBS);
export const changeJobToggleStatusAction = createAction(CHANGE_JOB_TOGGLE_STATUS);
export const removeJobInActiveAction = createAction(REMOVE_JOB_IN_ACTIVE);