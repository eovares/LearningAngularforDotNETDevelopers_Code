import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo'

@Injectable()
export class TodoService {

    constructor(private http: Http) {    }

    getTodos(): Promise<Array<Todo>> {
        return this.http.get('/api/todos')
            .toPromise()
            .then(response => response.json() as Array<Todo>)
            .catch(this.handleError);
    }

    getPendingTodos() {
        this.http.get('/api/todos/pending-only')
            .subscribe(
            err => console.log(err),
            () => console.log('getTodos Complete')
            );
    }   

    postTodo(todo: Todo): Promise<Todo> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/todos', JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(response => response.json() as Todo)
            .catch(this.handleError);
    }

    putTodo(todo: Todo) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.put('/api/todos/' + todo.id, JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        this.http.delete('/api/todos/' + todo.id)
            .subscribe(err => console.log(err),
            () => console.log('getTodos Complete')
            );
    }    

    remove(todo: Todo) {
        this.deleteTodo(todo);        
    }

    add(title: string): Promise<Todo> {
        var todo = new Todo(0, title, false);
        return this.postTodo(todo);
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
        this.putTodo(todo);
    }

    removeCompleted() {
        this.getPendingTodos();        
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}