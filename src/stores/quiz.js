import { makeAutoObservable } from 'mobx';
import data from '../utils/data.json';

export class Quiz {
  constructor() {
    this.data = data;
    this.isComleted = false;
    this.categories = data.categories;
    makeAutoObservable(this);
  }
}
