import VueRouter from 'vue-router';
import Vue from 'vue';

import Main from '@/component/Main';
import YoutubePlayer from '@/component/YoutubePlayer';


Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Main },
  { path: '/youtubeplayer', component: YoutubePlayer },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});


export default router;
