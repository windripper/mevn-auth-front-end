export default {
    setUserAuth: (state, payload) => {
        localStorage.setItem('auth', JSON.stringify(payload));
        state.user = payload.user;
        state.token = payload.token;
    },
    unsetUserAuth: (state) => {
        localStorage.removeItem('auth');
        state.user = null;
        state.user = null;
    }
};
