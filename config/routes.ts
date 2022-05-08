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
    icon: 'BranchesOutlined',
    path: '/nodes',
    routes: [
      {
        path: '/nodes/list',
        name: 'node-info',
        icon: 'ClusterOutlined',
        component: './nodes',
      },
      {
        path: '/nodes/vm/list',
        name: 'node-vm',
        icon: 'DesktopOutlined',
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
    icon: 'DatabaseOutlined',
    path: '/resource',
    routes: [
      {
        path: '/resource/scripts/add',
        name: 'addscript',
        icon: 'CodeOutlined',
        component: './scripts/add',
      },
      {
        path: '/resource/scripts/list',
        name: 'scripts',
        icon: 'BugOutlined',
        component: './scripts/index',
      },
      {
        path: '/resource/scripts/detail/:id',
        name: 'script-info',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/detail',
      },
      {
        path: '/resource/scripts/edit/:id',
        name: 'script-edit',
        icon: 'smile',
        hideInMenu: true,
        component: './scripts/edit',
      },
      {
        path: '/resource/check/item',
        name: 'checkitem',
        icon: 'smile',
        component: './check/checkItem',
      },
      {
        path: '/resource/check/item/add',
        name: 'checkitem-add',
        icon: 'smile',
        component: './check/additem',
        hideInMenu: true,
      },
      {
        path: '/resource/check/edit/:id',
        name: 'checkitem-edit',
        icon: 'smile',
        component: './check/edititem',
        hideInMenu: true,
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
    icon: 'ScheduleOutlined',
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
        path: '/task/presetinfo/:id',
        name: 'task-preset-info',
        icon: 'smile',
        hideInMenu: true,
        component: './task/taskPresetInfo',
      },
      {
        path: '/task/presetupdate/:id',
        name: 'task-preset-update',
        icon: 'smile',
        hideInMenu: true,
        component: './task/taskPresetUpdate',
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
        path: '/app/info/:id',
        name: 'infoApp',
        icon: 'smile',
        hideInMenu: true,
        component: './app/infoApplication',
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
