export default {
    setAuth: ({ commit }, payload) => {
        commit('setUserAuth', payload);
    },
    unsetAuth: ({ commit }) => {
        commit('unsetUserAuth');
    }
};
