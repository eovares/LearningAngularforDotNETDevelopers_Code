import { Todo } from './todo'

export class TodoService {

    todos: Array<Todo>

    constructor() {
        this.todos = [new Todo('First item'),
        new Todo('Second item'),
        new Todo('Third item')];
    }

    getPending() {
        return this.todos.filter((todo: Todo) => todo.completed === false);
    }

    getCompleted() {
        return this.todos.filter((todo: Todo) => todo.completed === true);
    }

    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    add(title: string) {
        this.todos.push(new Todo(title));
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
    }

    removeCompleted() {
        this.todos = this.getPending();
    }
}