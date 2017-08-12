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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.newTodoText = '';
        this.title = 'Test My Todo App';
        this.todoService = todoService;
        this.todos = todoService.todos;
    }
    AppComponent.prototype.removeCompleted = function () {
        this.todoService.removeCompleted();
    };
    AppComponent.prototype.toggleCompletion = function (todo) {
        this.todoService.toggleCompletion(todo);
    };
    AppComponent.prototype.remove = function (todo) {
        this.todoService.remove(todo);
    };
    AppComponent.prototype.addTodo = function () {
        if (this.newTodoText.trim().length) {
            this.todoService.add(this.newTodoText);
            this.newTodoText = '';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map