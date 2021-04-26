export default [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: 'UsersIndex' */ '~/modules/auth/Login'),
    },
];