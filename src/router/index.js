import { createRouter, createWebHashHistory } from 'vue-router'
// import {nextTick} from 'vue';
const routes = [
  {
    path: '/',
    component: () => import('@/views/Line')
  },
  {
    path: '/station',
    component: () => import('@/views/Station')
  },
  {
    path: '/timetable',
    component: () => import('@/views/Timetable')
  },
  {
    path: '/analysis',
    component: () => import('@/views/Analysis')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// const DEFAULT_TITLE = '⾦河市公交线路系统';
// router.afterEach((to, from) => {
//   // Use next tick to handle router history correctly
//   // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//   nextTick(() => {
//     document.title = to.meta.title || DEFAULT_TITLE;
//   });
// });
export default router
