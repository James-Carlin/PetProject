import { Injectable } from '@angular/core';
import { Dog } from './model/dog';
import { DogImage } from './model/dogImage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private clicked = 0;

  constructor(
    private http: HttpClient
  ) { }

  private dogsUrl = 'https://dog.ceo/api/breeds/image/random';
  //private dogsUrl = 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_2433.jpg';

  // Dog Array
  dogs: Dog[] = [];
  likedDogs: Dog[] = [];


  private  handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // TODO: improve error message
      console.log('Error');

      // Keep app running
      return of(result as T);
    };
  }


  getDogs() {

    for (let i = 0; i < 20; i++ ) {
      this.getRandomDog()
        .subscribe(dogImage => {
          this.dogs[i] = new Dog(i + 1, '', dogImage.message);
        });
    }
    console.log(this.dogs);
    return this.dogs;
  }

  getRandomDog() {

    return this.http.get(this.dogsUrl);
  }

  getLikedDogs() {

    for(let i = 0; i < localStorage.length; i++)
    {
      const retrievedDog = localStorage.getItem((i + 1).toString());
      this.likedDogs[i] = JSON.parse(retrievedDog);
    }

    return this.likedDogs;
    //console.log(this.likedDogs);
  }

  removeFromLiked(storageSize: number) {
    for(let i = 0; i < storageSize; i++){
      const retrievedDog = localStorage.getItem((i + 1).toString());
      this.likedDogs[i] = JSON.parse(retrievedDog);
    }
    return this.likedDogs;
    console.log(this.likedDogs);
  }

}
