import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dog } from './model/dog';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const faves = [
      { id: 1, breed: 'Borzoi', imageURL: 'https://images.dog.ceo/breeds/borzoi/n02090622_6123.jpg' }
    ];
    return {faves};
  }

}
