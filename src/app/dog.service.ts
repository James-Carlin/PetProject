import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient
  ) { }

  private dogsUrl = 'api/dogs';

  httpOptions = {
    headers: new HttpHeaders({'Content Type': 'application/json'})
  };

  private  handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // TODO: improve error message
      console.log('Error');

      //Keep app running
      return of(result as T);
    };
  }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl).pipe(
      tap(_ => console.log('fetched dogs')),
      catchError(this.handleError<Dog[]>('getDogs', []))
    );
  }

  likeDog() {

  }

  removeDog() {

  }

  nameDog() {

  }
}
