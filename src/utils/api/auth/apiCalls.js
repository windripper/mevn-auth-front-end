import axios from '../axios';

const register = data => {
    return axios.post('/auth/register', data);
};

const login = data => {
    return axios.post('/auth/login', data);
};

const forgotPassword = data => {
    return axios.post('/auth/password/email', data);
};

export default {
    register,
    login,
    forgotPassword
};
