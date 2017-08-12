import { Component } from '@angular/core';
import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [TodoService]
})
export class AppComponent {

    todos: Array<Todo>;
    todoService: TodoService;
    newTodoText = '';

    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.todos = todoService.todos;
    }

    removeCompleted() {
        this.todoService.removeCompleted();
    }

    toggleCompletion(todo: Todo) {
        this.todoService.toggleCompletion(todo);
    }

    remove(todo: Todo) {
        this.todoService.remove(todo);
    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoService.add(this.newTodoText);
            this.newTodoText = '';
        }
    }
}
