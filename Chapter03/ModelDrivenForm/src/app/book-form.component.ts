import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Book }    from './book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  public submitted: boolean;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl('book name', Validators.required),
      author: new FormControl('author name', Validators.required),
      publication: new FormControl('publication name is optional')
    });
  }

  onSubmit(model: Book, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
    // code to post the data
  }
}