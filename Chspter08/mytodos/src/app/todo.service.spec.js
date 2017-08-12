"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_service_1 = require("./todo.service");
describe('TodoService Testing', function () {
    var service;
    beforeEach(function () { service = new todo_service_1.TodoService(); });
    it('getPending length should return 3', function () {
        expect(service.getPending().length).toBe(3);
    });
    it('getCompleted length should return 0', function () {
        expect(service.getCompleted().length).toBe(0);
    });
});
//# sourceMappingURL=todo.service.spec.js.map