// src/ui/components/todo-list/component.ts

import Component, { tracked } from "@glimmer/component";

export default class TodoList extends Component {

  @tracked newItemText = '';

  @tracked items = [
    {
      text: "Install Glimmer",
      isDone: false,
    },
    {
      text: "Build app",
      isDone: false,
    },
    {
      text: "Bro down",
      isDone: false,
    }
  ];

  updateNewItemText(e) {
    this.newItemText = e.target.value;
  }

  addItem() {
    if (!this.newItemText) return false;

    let items = [
      ...this.items,
      {
        text: this.newItemText,
        isDone: false,
      },
    ];

    this.items = items;
    this.newItemText = '';
  }

  deleteItem(removedItem) {
    let items = this.items.filter(item => {
      return item.text !== removedItem.text;
    });

    this.items = items;
  }

  toggleItem(toggledItem) {
    let items = this.items.map(item => {
      if (item.text === toggledItem.text) {
        return Object.assign(item, {
          isDone: !item.isDone,
        });
      } else {
        return item;
      }
    });

    this.items = items;
  }

}
