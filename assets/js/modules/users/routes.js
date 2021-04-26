export default [
    {
        path: '/users',
        name: 'users-index',
        component: () => import(/* webpackChunkName: 'UsersIndex' */ '~/modules/users/Index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users/:id',
        name: 'users-show',
        component: () => import(/* webpackChunkName: 'UsersShow' */ '~/modules/users/Show'),
        meta: {
            requiresAuth: true
        }
    },
];