import input from './components/inputBox.vue'

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVueIcons, BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('input-box', input)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
