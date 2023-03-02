import {Component, OnInit} from '@angular/core';
import {Todo, todos} from "../../../todo";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  todos:Todo[]

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = todos
  }

  toggleDone (id: number) {
    todos.map((todo, i) => {
      if (i === id) todo.completed = !todo.completed

      return todo;
    })
  }
}
