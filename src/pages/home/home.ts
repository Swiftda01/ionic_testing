import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items = this.dataProvider.getItems();
  newTodo = {title: '', info: ''};

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
  }

  openDetails(item) {
    this.navCtrl.push('DetailsPage', {todo: item});
  }

  addTodo(todo) {
    this.dataProvider.addItem(todo);
    this.newTodo = {title: '', info: ''};
  }

  removeTodo(position) {
    this.dataProvider.removeItem(position);
  }

}
