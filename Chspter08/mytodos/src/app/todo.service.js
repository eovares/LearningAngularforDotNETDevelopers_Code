"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var TodoService = (function () {
    function TodoService() {
        this.todos = [new todo_1.Todo('First item'),
            new todo_1.Todo('Second item'),
            new todo_1.Todo('Third item')];
    }
    TodoService.prototype.getPending = function () {
        return this.todos.filter(function (todo) { return todo.completed === false; });
    };
    TodoService.prototype.getCompleted = function () {
        return this.todos.filter(function (todo) { return todo.completed === true; });
    };
    TodoService.prototype.remove = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    };
    TodoService.prototype.add = function (title) {
        this.todos.push(new todo_1.Todo(title));
    };
    TodoService.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoService.prototype.removeCompleted = function () {
        this.todos = this.getPending();
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map