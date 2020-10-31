import { createApp } from 'vue';
import './registerServiceWorker';
import router from './router';

import App from '@/App.vue';
import './style.scss';

import { Button, Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App)
  .use(Button)
  .use(Select)
  .use(router)
  .mount('#app');
