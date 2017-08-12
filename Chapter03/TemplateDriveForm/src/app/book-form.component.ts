import { Component } from '@angular/core';

import { Book }    from './book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {

  model = new Book('book name','author name','publication name is optional');

  onSubmit() {
    // code to post the data
  }

  newBook() {
    this.model = new Book('','','');
  }
}
