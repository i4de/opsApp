export default [
  {
    path: '/swagger',
    layout: false,
    component: './swagger',
  },
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
    routes: [
      {
        path: '/nodes/list',
        name: '节点信息',
        icon: 'smile',
        component: './nodes',
      },
      {
        path: '/nodes/vm/list',
        name: '主机节点',
        icon: 'smile',
        component: './nodes/vm',
      },
      {
        path: '/nodes/vm/file/:id',
        name: '主机节点文件',
        icon: 'smile',
        component: './nodes/vmFile',
        hideInMenu: true,
      },
    ],
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
      {
        path: '/scripts/detail/:id',
        name: '脚本详情',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/detail',
      },
      {
        path: '/scripts/edit/:id',
        name: '修改脚本',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/edit',
      },
    ],
  },
  {
    name: '任务管理',
    icon: 'table',
    path: '/task',
    routes: [
      {
        path: '/add',
        name: '添加任务',
        icon: 'smile',
        component: './scripts/add',
      },
      {
        path: '/task/record',
        name: '任务记录',
        icon: 'smile',
        component: './task/taskRecords',
      },
    ],
  },
  {
    component: './404',
  },
];
