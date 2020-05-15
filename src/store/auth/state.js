import actions from './actions';
import getters from './getters';
import mutations from './mutations';

let initialState = {
    user: null,
    token: null
};

const auth = JSON.parse(localStorage.getItem('auth'));

if (auth) {
    initialState = auth;
}

export default {
    namespaced: true,
    state: initialState,
    actions,
    getters,
    mutations
};
