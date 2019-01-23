import { handleActions } from 'redux-actions';
import {
    TOGGLE_SIDEBAR_SUCCEEDED,
    GET_JOBS_SUCCEEDED,
    CHANGE_JOB_TOGGLE_STATUS_SUCCEEDED,
    REMOVE_JOB_IN_ACTIVE_SUCCEEDED,
    ADD_TRUCK_TO_LIST_SUCCEEDED,
    REMOVE_TRUCK_FROM_LIST_SUCCEEDED
} from '../constants';

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
        },
        [REMOVE_JOB_IN_ACTIVE_SUCCEEDED]: (state, action) => {
            let tmp = state.jobs.map((job, i) => {
                if (job.job_id === action.payload) {
                    job.status = "completed";
                }
                return job;
            });

            return {
                ...state,
                jobs: tmp
            };
        },
        [ADD_TRUCK_TO_LIST_SUCCEEDED]: (state, action) => {
            let tmp = state.jobs.map((job, i) => {
                if (job.job_id === action.payload.job_id) {
                    job.dispatched_trucks.push(action.payload.number);
                    let index = job.trucks.indexOf(action.payload.number);
                    job.trucks.splice(index, 1);
                }
                return job;
            });

            return {
                ...state,
                jobs: tmp
            }
        },
        [REMOVE_TRUCK_FROM_LIST_SUCCEEDED]: (state, action) => {
            let tmp = state.jobs.map((job, i) => {
                if (job.job_id === action.payload.job_id) {
                    job.trucks.push(action.payload.number);
                    let index = job.dispatched_trucks.indexOf(action.payload.number);
                    job.dispatched_trucks.splice(index, 1);
                }
                return job;
            });

            return {
                ...state,
                jobs: tmp
            }
        }
    },
    initialState
);

export default dashboardReducer;