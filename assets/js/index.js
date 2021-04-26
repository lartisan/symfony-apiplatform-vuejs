import '~/../css/app.css';
import Vue from 'vue';
import store from "~/store";
import router from '~/routes';

import App from '~/App';

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (/*to.name !== 'login' && */store.getters["auth/GET_TOKEN"]) {
            next()
            return
        }

        next({ name: 'login' })
    } else {
        next()
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
