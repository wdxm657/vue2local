import DashboardLayout from 'src/pages/Layout/DashboardLayout.vue';
import ControlPanel from 'src/pages/ControlPanel/ControlPanel.vue';

const routes = [
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
];

export default routes;
