import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { AppRoutingModule } from './app.routing';
import { TodoService } from './todo.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, TodoComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }