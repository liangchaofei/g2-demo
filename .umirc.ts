import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/single',
    },
    {
      name: '单标尺',
      path: '/single',
      component: './Single',
    },
    {
      name: '双标尺',
      path: '/double',
      component: './Double',
    },
    {
      name: '缩小',
      path: '/small',
      component: './Small',
    },
    {
      name: '放大',
      path: '/big',
      component: './Big',
    },
    {
      name: '局部',
      path: '/part',
      component: './Part',
    },
    {
      name: '曲线模式',
      path: '/pattern',
      component: './Pattern',
    },
  ],
  npmClient: 'pnpm',
  mfsu: false
});

