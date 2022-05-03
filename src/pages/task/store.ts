
import { observable, action, computed, toJS } from 'mobx';
import React from 'react';
import { vmItemType } from '@/services/vm';


const TaskStore = observable({
    step: 0,
    next: () =>{ TaskStore.step++},
    pre: () => { TaskStore.step--},
    task: {},
    script: {},
    vmlist: [],
    res: {},
    type: '',
    reset:() => {
      TaskStore.step = 0;
      TaskStore.task = {};
      TaskStore.script = {};
      TaskStore.vmlist = [];
      TaskStore.res = {};
    }
});


export default TaskStore;