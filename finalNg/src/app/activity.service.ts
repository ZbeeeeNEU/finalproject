import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(private http:HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getActivities(): Observable<any> {
    return this.http.get(endpoint + 'activities').pipe(
      map(this.extractData));
  }

  getActivity(id): Observable<any> {
    return this.http.get(endpoint + 'activities/' + id).pipe(
      map(this.extractData));
  }

  addActivity (activity): Observable<any> {
    console.log(activity);
    return this.http.post<any>(endpoint + 'activities', JSON.stringify(activity), httpOptions).pipe(
      tap((product) => console.log(`added todo w/ id=${product.id}`)),
      catchError(this.handleError<any>('add operation'))
    );
  }

  updateActivity (id, activity): Observable<any> {
    return this.http.put(endpoint + 'activities/' + id, JSON.stringify(activity), httpOptions).pipe(
      tap(_ => console.log(`updated todo id=${id}`)),
      catchError(this.handleError<any>('update operation'))
    );
  }

  deleteActivity (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'activities/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('delete operation'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":  "application/json",
    // "Access-Control-Allow-Origin": 'http://localhost:4200',
    // "Access-Control-Allow-Methods": 'GET, POST, DELETE, PUT, OPTIONS',
    // "Access-Control-Allow-Headers": 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    // 'Access-Control-Allow-Credentials' : 'true'
  })
};
