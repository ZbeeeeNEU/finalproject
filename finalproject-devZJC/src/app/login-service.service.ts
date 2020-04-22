import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {User} from './models/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  userResource: string;
  userResourceURL: string;
  nameURL: string;

  constructor(private http: HttpClient) {
    this.userResource = 'users';
    this.userResourceURL = `${environment.serverBaseURL}/${this.userResource}`;
  }

  // //get all todo items
  getUser(userName): Observable<User>{
    this.nameURL = `${environment.serverBaseURL}/${this.userResource}/${userName}`;
    return this.http.get<User>(this.nameURL);
}

checkUser(userName): Observable<User>{
  this.nameURL = `${environment.serverBaseURL}/${this.userResource}/${userName}`;
  return this.http.get<User>(this.nameURL);
}


createUser(user): Observable<User> {
  let newUser: User;
  newUser = user;
  console.log(newUser);
  this.nameURL = `${environment.serverBaseURL}/${this.userResource}`;
  return this.http.post<User>(this.nameURL, newUser);
  
}

}







// // add new todo item
// createTodo(todo: Todo = null): Observable < Todo > {
//   let newTodo: Todo;
//   newTodo = todo ? todo : new Todo("Untitled", "", new Date(), new Date());
//   return this.http.post<Todo>(this.todoResourceURL, newTodo);
// }


// //update todo item
// checkTodo(todo: Todo = null): Observable < Todo > {
//   let newTodo: Todo;
//   newTodo = todo ? todo : new Todo("Untitled", "", new Date(), new Date());
//   this.idURL = `${environment.serverBaseURL}/${this.todoResource}/${newTodo.id}`;
//   return this.http.put<Todo>(this.idURL, newTodo);