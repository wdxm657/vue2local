import VueRouter from 'vue-router';
import routes from './routes';
import DashboardLayout from 'src/pages/Layout/DashboardLayout.vue';
import ControlPanel from 'src/pages/ControlPanel/ControlPanel.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: 'controlPanel',
          name: 'ControlPanel',
          components: { default: ControlPanel }
        }
      ]
    },
  ],
  linkActiveClass: 'active',
});


// children: [
//   {
//     path: 'controlPanel',
//     name: 'ControlPanel',
//     components: { default: ControlPanel }
//   }
// ]
export default router;
