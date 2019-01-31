import axios from 'axios';

export default {
    fetchJobs: () => {
        return axios.get(process.env.REACT_APP_API_DOMAIN + process.env.REACT_APP_API_VERSION + '/dispatch.json', { crossdomain: true });
    },
    fetchAvailableTrucks: () => {
        return axios.get(process.env.REACT_APP_API_DOMAIN + process.env.REACT_APP_API_VERSION + '/trucks.json', { crossdomain: true });
    }
}