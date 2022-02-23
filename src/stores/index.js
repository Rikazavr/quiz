import { makeAutoObservable } from 'mobx';
import { Quiz } from './quiz';

class RootStore {
  constructor() {
    this.quiz = new Quiz(this);
    makeAutoObservable(this);
  }
}

const stores = new RootStore();

export { stores };
