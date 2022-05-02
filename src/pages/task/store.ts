import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import React from 'react';

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
      return this.step;
  }
}

export const storesContext = React.createContext({
  scriptTaskStore: new CreateScriptTaskStore(),
});

export const useStores = () => React.useContext(storesContext);
