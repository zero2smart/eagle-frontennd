import { TOGGLE_SIDEBAR, GET_JOBS } from '../constants';
import { createAction } from 'redux-actions';

export const toggleSideBarAction = createAction(TOGGLE_SIDEBAR);
export const getJobsAction = createAction(GET_JOBS);