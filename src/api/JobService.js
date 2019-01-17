import axios from 'axios';

export default {
    fetchJobs: () => {
        return axios.get('data/jobs.json');
    }
}