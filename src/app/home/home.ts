import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  foods:Food[]=[];
  constructor(private foodService:FoodService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["searchTerm"])
        this.foods=this.foodService.getAllFoodsBySearchTerm(params["searchTerm"]);
    else if(params["tag1"])
      this.foods = this.foodService.getAllFoodsByTag(params["tag1"]);
      else
        this.foods = this.foodService.getAll();
    });
  

  }

}
