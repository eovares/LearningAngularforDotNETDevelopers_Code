"use strict";
var Todo = (function () {
    function Todo(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
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