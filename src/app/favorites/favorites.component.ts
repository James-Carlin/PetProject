import { Component, OnInit } from '@angular/core';
import {Dog} from '../model/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  likedDogs: Dog[] = [];

  mySubscription: any;

  constructor(
     private dogService: DogService  ) { }


  ngOnInit() {
    this.likedDogs = this.dogService.getLikedDogs();
    console.log(this.likedDogs);
  }


  removeDog(dog: Dog): void {
    if(localStorage.getItem(dog.id.toString())) {
      localStorage.removeItem(dog.id.toString());
    }
    else{
      console.log('error');
    }



    console.log(localStorage.length);

    // if(localStorage.length !== this.likedDogs.length){
    //   this.likedDogs = this.dogService.getLikedDogs();
    // }
    window.location.reload();
    this.likedDogs.shift();

  }

}
