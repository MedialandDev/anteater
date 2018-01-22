import Vue from 'vue';
import App from '@/container/App';
import router from './router';
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
