import { Component } from '@angular/core';
import { Model, TodoItem } from './model'

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(item: string) {
    if (item != '') {
      this.model.items.push(new TodoItem(item, false));
    }
  }
}
