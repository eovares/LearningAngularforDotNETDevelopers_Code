"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(title) {
        this.title = title;
        this.completed = false;
    }
    Object.defineProperty(Todo.prototype, "isCompleted", {
        set: function (value) {
            this.completed = value;
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map