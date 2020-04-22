import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './../models/event';

import { environment } from '../../environments/environment';
import {observable, Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EventService {

  eventResource: string;
  eventResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.eventResource = 'events';
    this.eventResourceURL =  `${environment.serverBaseURL}/${this.eventResource}`;
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventResourceURL).pipe(
      tap(receivedEvents => console.log(`received Events = ${JSON.stringify(receivedEvents)}`)));
  }

  getEventFromId(id: string): Observable<Event> {
    const url = `${this.eventResourceURL}/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(selectedEvent => console.log(`selected Event = ${JSON.stringify(selectedEvent)}`)));
  }
  // updateTodo(todo: Todo): Observable<any> {
  //   return this.http.put(`${this.todoResourceURL}/${todo.id}`, todo, httpOptions).pipe(
  //     tap(updatedTodo => console.log(`updated todo = ${JSON.stringify(updatedTodo)}`)));
  // }
  // addTodo(newTodo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.todoResourceURL, newTodo, httpOptions).pipe(
  //     tap((todo: Todo) => console.log(`inserted todo = ${JSON.stringify(Todo)}`)));
  // }
  //
  // deleteTodo(TodoId: string): Observable<Todo> {
  //   const url = `${this.todoResourceURL}/${TodoId}`;
  //   return this.http.delete<Todo>(url, httpOptions).pipe(
  //     tap(_ => console.log(`Deleted Todo with id = ${TodoId}`)));
  // }
}
