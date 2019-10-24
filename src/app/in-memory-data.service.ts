import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDbDogs() {
    const dogs = [
      {}
    ];
    return {dogs};
  }

  createDbFavorites() {
    const faves = [
      {}
    ];
    return {faves};
  }

}
