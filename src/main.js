// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
//var VueResource = require('vue-resource');
//Vue.use(VueResource);
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
