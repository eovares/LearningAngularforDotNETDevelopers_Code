"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var todo_1 = require("./todo");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get('/api/todos')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.getPendingTodos = function () {
        this.http.get('/api/todos/pending-only')
            .subscribe(function (err) { return console.log(err); }, function () { return console.log('getTodos Complete'); });
    };
    TodoService.prototype.postTodo = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/todos', JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.putTodo = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put('/api/todos/' + todo.id, JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(function () { return todo; })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.http.delete('/api/todos/' + todo.id)
            .subscribe(function (err) { return console.log(err); }, function () { return console.log('getTodos Complete'); });
    };
    TodoService.prototype.remove = function (todo) {
        this.deleteTodo(todo);
    };
    TodoService.prototype.add = function (title) {
        var todo = new todo_1.Todo(0, title, false);
        return this.postTodo(todo);
    };
    TodoService.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
        this.putTodo(todo);
    };
    TodoService.prototype.removeCompleted = function () {
        this.getPendingTodos();
    };
    TodoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map