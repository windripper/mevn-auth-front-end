export default {
    getUser: (state) => {
        return !!state.user;
    },
    getUserName: (state) => {
        if (state.user) {
            return state.user.name;
        } else {
            return null;
        }
    },
    isUserConfirmEmail: (state) => {
        if (state.user && state.user.emailConfirmCode !== null) {
            return true;
        }
    }
};
