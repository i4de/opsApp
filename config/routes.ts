

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
    name: '脚本管理',
    icon: 'crown',
    path: '/scripts',
    routes: [
      {
        path: '/scripts/add',
        name: '添加脚本',
        icon: 'smile',
        component: './scripts/add',
      },
      {
        path: '/scripts/list',
        name: '脚本列表',
        icon: 'smile',
        component: './scripts/index',
      },
    ],
  },
  {
    name: '任务管理',
    icon: 'table',
    path: '/task/script',
    component: './scriptTask',
  },
  {
    component: './404',
  }
 
];
