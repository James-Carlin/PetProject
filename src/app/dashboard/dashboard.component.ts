import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../dog.service';
import { DogImage } from '../model/dogImage';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //dogs = DOGS;
  dogs: Dog[] = [];
  likedDogs: Dog[] = [];

  constructor(
    private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
    //console.log(this.dogs);
  }

  likeDog(dog: Dog): void {
    this.likedDogs.push(dog);
    console.log(this.likedDogs);
}

}
