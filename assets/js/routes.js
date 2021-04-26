import Vue from 'vue';
import VueRouter from "vue-router";
import authRoutes from '~/modules/auth/routes';
import userRoutes from '~/modules/users/routes';

Vue.use(VueRouter);

const baseRoutes = [
    {
        path: '/',
        name: 'welcome',
        redirect: { name: 'users-index' }
    },
];
const routes = baseRoutes.concat(
    authRoutes,
    userRoutes,
);

export default new VueRouter({
    mode: 'history',
    routes
});