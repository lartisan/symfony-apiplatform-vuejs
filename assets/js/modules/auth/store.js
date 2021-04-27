import api from "~/api";

export default {
    namespaced: true,
    state: {
        token: !!localStorage.getItem('user-token'),
        currentUser: {
            username: '',
            roles: []
        },
    },
    getters: {
        GET_TOKEN: state => state.token,
        GET_AUTH_USER: state => state.currentUser,
        LOGGED_IN: state => state.token !== false,
    },
    mutations: {
        SET_TOKEN: (state, payload) => state.token = payload,
        SET_AUTH_USER: (state, payload) => state.currentUser = { username: payload.username, roles: payload.roles },
        AUTH_LOGOUT: state => {
            state.token = false;
            state.currentUser = {}
        }
    },
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise((resolve, reject) => {
                api.post(`/api/login`, payload)
                    .then(response => {
                        if(response.status === 200) {
                            let token = response.data.token;

                            commit('SET_TOKEN', token)
                            localStorage.setItem('user-token', token)
                            resolve(response);
                        }
                    })
                    .catch(error => {
                        localStorage.removeItem('user-token')
                        // TODO: Auth error
                        reject(error)
                    });
            })
        },
        // TODO: User lost after page refresh ... solution? Store username & roles in localStorage?? or make an api request on each page refresh
        AUTH_USER: ({commit}) => {
            return new Promise((resolve, reject) => {
                api.get(`/api/user`)
                    .then(response => {
                        if(response.status === 200) {
                            commit('SET_AUTH_USER', response.data)
                            resolve(response);
                        }
                    })
                    .catch(error => {
                        reject(error)
                    });
            })
        },
        LOGOUT: ({commit}) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT');

                localStorage.removeItem('user-token');
                delete api.defaults.headers.common['Authorization'];
                resolve(true);
            })
        }
    }
}