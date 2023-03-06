import {Component, OnInit} from '@angular/core';
import {Todo, todos} from "../../../todo";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  todos:Todo[]

  inputTodo:string = "";

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

  deleteTodo (id: number) {
    this.todos = this.todos.filter((todo, i) => i !== id)
  }

  addTodo () {
    if (this.inputTodo !== '') {
      this.todos = todos;
      todos.push({
        text: this.inputTodo,
        date: '2023',
        completed: false
      });
    }

    this.inputTodo = "";
  }

  allTodo () {
    this.todos = todos;
  }

  doneTodo () {
    this.todos = todos.filter(done => done.completed)
  }

  notDoneTodo () {
    this.todos = todos.filter(done => !done.completed)
  }
}
