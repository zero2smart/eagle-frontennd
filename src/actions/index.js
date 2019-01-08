import { TOGGLE_SIDEBAR, GET_JOBS, CHANGE_JOB_TOGGLE_STATUS } from '../constants';
import { createAction } from 'redux-actions';

export const toggleSideBarAction = createAction(TOGGLE_SIDEBAR);
export const getJobsAction = createAction(GET_JOBS);
export const changeJobToggleStatusAction = createAction(CHANGE_JOB_TOGGLE_STATUS);