export default {
    getUser: (state) => {
        return !!state.user;
    },
    getUserName: (state) => {
        if (state.user.name) {
            return state.user.name;
        }
    },
    isUserConfirmEmail: (state) => {
        if (state.user && state.user.emailConfirmCode !== null) {
            return true;
        }
    }
};
