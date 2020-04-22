import actions from './actions';
import getters from './getters';
import mutations from './mutations';

let initialState = null;

try {
    initialState = JSON.parse(localStorage.getItem('auth'));
} catch(e) {
    initialState = {
        user: null,
        token: null
    };
}

export default {
    namespaced: true,
    state: initialState,
    actions,
    getters,
    mutations
};
