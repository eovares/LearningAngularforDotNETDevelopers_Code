"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_1 = require("./book");
var BookFormComponent = (function () {
    function BookFormComponent() {
        this.model = new book_1.Book('book name', 'author name', 'publication name is optional');
    }
    BookFormComponent.prototype.onSubmit = function () {
        // code to post the data
    };
    BookFormComponent.prototype.newBook = function () {
        this.model = new book_1.Book('', '', '');
    };
    return BookFormComponent;
}());
BookFormComponent = __decorate([
    core_1.Component({
        selector: 'book-form',
        templateUrl: './book-form.component.html'
    })
], BookFormComponent);
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map