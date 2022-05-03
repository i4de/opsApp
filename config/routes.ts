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
    name: 'nodes',
    icon: 'table',
    path: '/nodes',
    routes: [
      {
        path: '/nodes/list',
        name: 'node-info',
        icon: 'smile',
        component: './nodes',
      },
      {
        path: '/nodes/vm/list',
        name: 'node-vm',
        icon: 'smile',
        component: './nodes/vm',
      },
      {
        path: '/nodes/vm/file/:id',
        name: 'node-vm-file',
        icon: 'smile',
        component: './nodes/vmFile',
        hideInMenu: true,
      },
    ],
  },
  {
    name: 'resource',
    icon: 'crown',
    path: '/scripts',
    routes: [
      {
        path: '/scripts/add',
        name: 'addscript',
        icon: 'smile',
        component: './scripts/add',
      },
      {
        path: '/scripts/list',
        name: 'scripts',
        icon: 'smile',
        component: './scripts/index',
      },
      {
        path: '/scripts/detail/:id',
        name: 'script-info',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/detail',
      },
      {
        path: '/scripts/edit/:id',
        name: 'script-edit',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/edit',
      },
      {
        path: '/check/item',
        name: 'checkitem',
        icon: 'smile',
        component: './check/checkItem',
      },
      {
        path: '/check/tpl',
        name: 'checktpl',
        icon: 'smile',
        component: './check/checkTpl',
      },
    ],
  },
  {
    name: 'tasks',
    icon: 'table',
    path: '/task',
    routes: [
      {
        path: '/task/add',
        name: 'addtask',
        icon: 'smile',
        component: './task/scriptTaskCreate',
      },
      {
        path: '/task/record',
        name: 'task-record',
        icon: 'smile',
        component: './task/taskRecords',
      },
      {
        path: '/task/preset',
        name: 'task-preset',
        icon: 'smile',
        component: './task/taskPreset',
      },
      {
        path: '/task/cron',
        name: 'task-cron',
        icon: 'smile',
        component: './task/taskCron',
      },
    ],
  },
  {
    name: 'app',
    icon: 'AndroidOutlined',
    path: '/app',
    routes: [
      {
        path: '/app/add',
        name: 'add',
        icon: 'smile',
        component: './app/addApplication',
      },
      {
        path: '/app/update/:id',
        name: 'updateApp',
        icon: 'smile',
        hideInMenu: true,
        component: './app/updateApplication',
      },
      
      {
        path: '/app/query',
        name: 'query',
        icon: 'smile',
        component: './app/queryApplication',
      },
    ],
  },
  {
    component: './404',
  },
];
