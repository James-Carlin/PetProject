import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../dog.service';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dogs = DOGS;

  constructor(
    private dogService: DogService) { }

  ngOnInit() {
    this.dogService.getDogs();
  }

  getDogs(): void {
    //this.dogService.getDogs();
      //.subscribe();
  }

}
