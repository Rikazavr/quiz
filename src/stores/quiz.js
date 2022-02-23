import { makeAutoObservable } from 'mobx';

export class Quiz {
  constructor() {
    this.data = 1;
    makeAutoObservable(this);
  }
}
