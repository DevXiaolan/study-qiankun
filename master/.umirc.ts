import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
        {
          path: '/mfe-react',
          microApp: 'mfe-react',
        },
        {
          path: '/mfe-vue',
          microApp: 'mfe-vue',
        },
        {
          path: '/put-all-in',
          component: '@/pages/all',
        },
      ]
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'mfe-react',
          entry: '//localhost:8001',
        },
        {
          name: 'mfe-vue',
          entry: '//localhost:8080',
        },
      ],
    },
  },
});
