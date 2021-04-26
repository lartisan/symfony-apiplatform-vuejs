import api from "~/api";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        users: [],
        selectedUser: {}
    },
    getters: {
        IS_LOADING: state => state.isLoading,
        HAS_ERROR: state => state.error !== null,
        ERROR: state => state.error,
        USERS: state => state.users,
        HAS_USERS: state => state.users.length > 0,
        SELECTED_USER: state => state.selectedUser
    },
    mutations: {
        FETCHING: state => {
            state.isLoading = true;
            state.error = null;
            state.users = [];
            state.selectedUser = {};
        },
        FETCHING_ERROR: (state, error) => {
            state.isLoading = false;
            state.error = error;
            state.users = [];
            state.selectedUser = {};
        },
        SET_USERS: (state, payload) => {
            state.isLoading = false;
            state.error = null;
            state.users = payload.data;
        },
        SET_SELECTED_USER: (state, payload) => {
            state.isLoading = false;
            state.error = null;
            state.selectedUser = payload.data;
        }
    },
    actions: {
        FETCH_USERS: async ({commit}) => {
            try {
                commit("FETCHING");

                return await api.get(`/api/users`)
                    .then((result) => commit("SET_USERS", result))
            } catch (error) {
                commit("FETCHING_ERROR", error);
                return null;
            }
        },
        FETCH_SELECTED_USER: async ({ commit }, userId) => {
            try {
                commit("FETCHING");
                return await api.get(`/api/users/${userId}`)
                    // .then(result => result.json())
                    .then(result => commit("SET_SELECTED_USER", result))
            } catch (error) {
                commit("FETCHING_ERROR", error);
                return null;
            }
        },
    }
}