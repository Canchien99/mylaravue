import Vue from 'vue';
import App from './App.vue';
import store from './stores';
import 'bootstrap';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;


import routes from './routers/routers'
Vue.config.productionTip = false

// import vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'myApp';
    next();
});

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
