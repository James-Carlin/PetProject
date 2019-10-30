import { Injectable } from '@angular/core';
import { Dog } from './model/dog';
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

  private dogsUrl = 'https://dog.ceo/api/breeds/image/random';

  //Dog Array
  dogs: Dog[] = [];

  httpOptions = {
    headers: new HttpHeaders({'Content Type': 'application/json'})
  };

  private  handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // TODO: improve error message
      console.log('Error');

      //Keep app running
      return of(result as T);
    };
  }

  // getDogs(): Observable<Dog[]> {
  //   return this.http.get<Dog[]>(this.dogsUrl).pipe(
  //     tap(_ => console.log('fetched dogs')),
  //     catchError(this.handleError<Dog[]>('getDogs', []))
  //   );
  // }
  getDogs() {
    for (let i = 0; i < 20; i++ ) {
      const imageUrl = this.http.get('https://dog.ceo/api/breeds/image/random').pipe(
        tap(_=> console.log('fetched dog')),
        catchError(this.handleError<Dog>('Get Dog'))
      );
      console.log(imageUrl);
      const dog = new Dog(i, 'collie-border', '');
      this.dogs[i] = dog;
      console.log(""+this.dogs[i].breed+", "+this.dogs[i].imageURL);
    }
  }
  likeDog() {

  }

  removeDog() {

  }

  nameDog() {

  }
}
