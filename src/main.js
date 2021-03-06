import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router/router'
import vueResource from 'vue-resource'

Vue.use(vueResource);

new Vue({
  el: '#app',
  render: h => h(App),
    router
});
