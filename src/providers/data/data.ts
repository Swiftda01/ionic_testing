import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  private todos = [
    {title: 'Buy Milk', info: 'Go to the grocery store'},
    {title: 'Build App', info: 'Add more features'},
    {title: 'Learn Ionic', info: 'learn autoamtic testing'}
  ];
  
  constructor() {
   
  }

  getItems() {
    return this.todos;
  }

  addItem(todo) {
    this.todos.push(todo);
  }

  removeItem(positon) {
    this.todos.splice(positon, 1);
  }
}
