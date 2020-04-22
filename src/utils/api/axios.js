import Axios from 'axios';

const url = process.env.PRODUCTION_HOST || 'http://localhost:3000';

const axios = Axios.create({
    baseURL: `${url}/api/v1`
});


export default axios;
