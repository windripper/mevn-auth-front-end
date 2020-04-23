import Axios from 'axios';
import store from '../../store/index';

const url = process.env.PRODUCTION_HOST || 'http://localhost:3000';

const axios = Axios.create({
    baseURL: `${url}/api/v1`
});


// TODO why 'this.$store' doesn't work

axios.interceptors.request.use((config) => {
    if (!!store.state.auth.user && !!store.state.auth.token) {
        config.headers = {
            access_token: store.state.auth.token
        };
    }


    return config;
});


export default axios;
