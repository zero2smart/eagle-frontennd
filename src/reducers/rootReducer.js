import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

const reducers = combineReducers({
    dashboard: dashboardReducer
});

export default reducers;
