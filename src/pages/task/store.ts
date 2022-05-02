
import { observable, action, computed, toJS } from 'mobx';
import React from 'react';


const TaskStore = observable({
    step: 0,
    next: () =>{ TaskStore.step++},
    pre: () => { TaskStore.step--}
});

class CreateScriptTaskStore {
  @observable step = 0;

  @action.bound
  next() {
    this.step++;
    console.log("step++:", this.step);
  }

  @action.bound
  pre() {
    this.step--;
    console.log("step--:", this.step);
  }

  @computed get getStep() {
        let i =toJS(this.step);
      return i;
  }
}

export const storesContext = React.createContext({
  scriptTaskStore: new CreateScriptTaskStore(),
});

export const useStores = () => React.useContext(storesContext);


export default TaskStore;