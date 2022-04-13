export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '节点管理',
    icon: 'table',
    path: '/nodes',
    component: './nodes',
  },
  {
    name: '登录界面',
    icon: 'table',
    path: '/u/login',
    component: './user/Login/login',
  },
  {
    name: '下发脚本',
    icon: 'table',
    path: '/task/script',
    component: './scriptTask',
  },
  {
    component: './404',
  }
 
];
