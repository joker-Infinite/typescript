import Vue from 'vue';
import axios, {AxiosInstance} from 'axios'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(v => {
    v.prototype.$axios = axios
});
Vue.config.productionTip = false;
declare module 'Vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance
    }
}
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
