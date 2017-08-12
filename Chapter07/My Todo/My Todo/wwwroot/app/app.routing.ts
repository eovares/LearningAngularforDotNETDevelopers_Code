import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full',
    },    
    { path: 'todo', component: TodoComponent, data: { title: 'Todo' } },
    { path: 'about', component: AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact' } }
];

export const routedComponents = [
    TodoComponent,
    AboutComponent,
    ContactComponent
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }