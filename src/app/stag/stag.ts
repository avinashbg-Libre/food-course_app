import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food';
import { Tag } from '../shared/models/Tags';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stag',
  standalone: false,
  templateUrl: './stag.html',
  styleUrl: './stag.css'
})
export class Stag {

  @Input()
  foodPageTags?:string[];

   tags?:Tag[];


  constructor(private foodService:FoodService){}
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags();
    
  }

}
