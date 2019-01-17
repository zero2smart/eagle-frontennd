import axios from 'axios';

export default {
    fetchJobs: () => {
        return axios.get('data/active.json');
    }
}