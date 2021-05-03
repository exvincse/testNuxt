// import Counter from '../storeModules/Counter'
import users from '../storeModules/users';
export const state = () => ({
    message: "Hello World",
    apiData: []
});

export const getters = {};
export const mutations = {
    SET_MESSAGE(state, payload) {
        state.message = payload;
    },
    SET_APIDATA(state, payload) {
        state.apiData = payload;
    }
};
export const actions = {
    nuxtServerInit({ commit }) {
        commit("SET_MESSAGE", "SERVER INIT");
        commit("USER/SET_FIRST_NAME", "rui");
        commit("USER/SET_LAST_NAME", "liu");
    },
    apiData({ commit }, payload) {
        commit("SET_APIDATA", payload);
    }
}

export default {
    strict: true,
    state,
    getters,
    mutations,
    actions,
    modules: {
        users
    }
};