import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [TodoService]
})
export class AppComponent implements OnInit {

    todos: Array<Todo>;
    newTodoText = '';

    constructor(private todoService: TodoService) {
        this.todos = new Array();
    }

    getTodos(): void {
        this.todoService
            .getTodos()
            .then(todos => this.todos = todos);
    }

    ngOnInit(): void {
        this.getTodos();
    }

    removeCompleted() {
        this.todoService.removeCompleted();
        this.todos = this.getPending();
    }

    toggleCompletion(todo: Todo) {
        this.todoService.toggleCompletion(todo);
    }

    remove(todo: Todo) {
        this.todoService.remove(todo);
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoService.add(this.newTodoText).then(res => {
                this.getTodos();
            });
            this.newTodoText = '';
            this.getTodos();
        }
    }

    getPending() {
        return this.todos.filter((todo: Todo) => todo.completed === false);
    }

    getCompleted() {
        return this.todos.filter((todo: Todo) => todo.completed === true);
    }
}
