import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { BookFormComponent } from './book-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    BookFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
