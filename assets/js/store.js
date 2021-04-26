import Vue from "vue";
import Vuex from 'vuex';
import authStore from "~/modules/auth/store";
import usersStore from "~/modules/users/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: authStore,
        users: usersStore
    }
});