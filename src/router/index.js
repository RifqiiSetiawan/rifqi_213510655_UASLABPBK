import { createRouter, createWebHistory } from 'vue-router';

import Photo from '../components/MyWidgetsPhoto.vue';
import Cuaca from '../components/MyWidgetsCuaca.vue';
import Lokasi from '../components/MyWidgetsLokasi.vue';
import Stopwatch from '../components/MyWidgetsStopwatch.vue';
import Game from '../components/MyWidgetsGame.vue';


const routes = [
  { path: '/', component: Lokasi},
  { path: '/WidgetsPhoto', component: Photo},
  { path: '/WidgetsCuaca', component: Cuaca},
  { path: '/WidgetsStopwatch', component: Stopwatch},
  { path: '/WidgetsGame', component: Game}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;