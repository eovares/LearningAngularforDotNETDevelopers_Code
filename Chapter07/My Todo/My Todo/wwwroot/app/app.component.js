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
var todo_service_1 = require("./todo.service");
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.newTodoText = '';
        this.todos = new Array();
    }
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService
            .getTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.removeCompleted = function () {
        this.todoService.removeCompleted();
        this.todos = this.getPending();
    };
    AppComponent.prototype.toggleCompletion = function (todo) {
        this.todoService.toggleCompletion(todo);
    };
    AppComponent.prototype.remove = function (todo) {
        this.todoService.remove(todo);
        this.todos.splice(this.todos.indexOf(todo), 1);
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        if (this.newTodoText.trim().length) {
            this.todoService.add(this.newTodoText).then(function (res) {
                _this.getTodos();
            });
            this.newTodoText = '';
            this.getTodos();
        }
    };
    AppComponent.prototype.getPending = function () {
        return this.todos.filter(function (todo) { return todo.completed === false; });
    };
    AppComponent.prototype.getCompleted = function () {
        return this.todos.filter(function (todo) { return todo.completed === true; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map