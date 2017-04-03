// src/ui/components/todo-item/component.ts

import Component from '@glimmer/component';

export default class TodoItem extends Component {

  delete() {
    let item = this.args.item;
    this.args.deleteItem(item);
  }

  toggle() {
    let item = this.args.item;
    this.args.toggleItem(item);
  }

};
