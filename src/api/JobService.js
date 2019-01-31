import axios from 'axios';

export default {
    fetchJobs: () => {
        return axios.get('data/jobs.json');
    },
    fetchAvailableTrucks: () => {
        return axios.get('data/trucks.json');
    }
}