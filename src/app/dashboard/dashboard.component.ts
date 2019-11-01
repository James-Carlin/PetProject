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

  private clicked = 0;
  private storageSize = 0;

  //dogs = DOGS;
  dogs: Dog[] = [];

  constructor(
    private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
    this.clicked = localStorage.length;
    //console.log(this.dogs);
  }

  likeDog(dog: Dog): void {
    this.clicked++;
    this.storageSize = localStorage.length;
    localStorage.setItem(this.clicked.toString(), JSON.stringify(dog));
    console.log(this.clicked);

    for(let i = 0; i <= this.storageSize; i++){
      console.log(localStorage.getItem((i+1).toString()));
    }
    // console.log(localStorage.getItem(this.clicked.toString()));
    //localStorage.setItem(dog.id.toString(), dog.imageURL.toString());

  }

  clearStorage() {
    localStorage.clear();
    this.clicked = 0;
  }
}
