import { makeAutoObservable } from 'mobx';
import data from '../data/data.json';

export class Quiz {
  constructor() {
    this.categories = data.categories;
    this.isComleted = false;
    this.selectedCategory = {};
    makeAutoObservable(this);
  }

  selectCategory = category => {
    this.selectedCategory = category;
  }
}
