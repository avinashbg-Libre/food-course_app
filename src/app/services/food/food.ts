import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return [
      {name:'All', count: 14},
      {name:'Pasta', count: 4},
      {name:'Fast Food', count: 2},
      {name:'Lunch', count: 1},
      {name:'Slow Food', count: 4},
      {name:'Hamburger', count: 1},
      {name:'Fry', count: 1},
      {name:'Soup', count: 2}
    ];
  }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodsByTag(tag:string): Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }
  


  getAll():Food[]{
    return [
      {
        id:1,
        name: 'Pasta',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'F1.jpg',
        tags: ['Fast Food','Pasta','Lunch']

      },
      {
        id:2,
        name: 'Burger',
        cookTime: '10-15',
        price: 15,
        favorite: false,
        origins: ['Germany'],
        stars: 4.4,
        imageUrl: 'F2.jpg',
        tags: ['Fast Food','hamburger','Lunch']

      },
       {
        id:3,
        name: 'Salad',
        cookTime: '10-11',
        price: 12,
        favorite: false,
        origins: ['France'],
        stars: 4.2,
        imageUrl: 'F3.jpg',
        tags: ['Slow Food','Salad','Lunch']

      }  ,
      {
        id:4,
        name: 'Cake',
        cookTime: '10-40',
        price: 18,
        favorite: false,
        origins: ['Spain'],
        stars: 4.5,
        imageUrl: 'F4.jpg',
        tags: ['Fast Food','Cake','Desert']

      }  ,
       {
        id:5,
        name: 'Veggie',
        cookTime: '10-20',
        price: 11,
        favorite: true,
        origins: ['India'],
        stars: 4.5,
        imageUrl: 'F5.jpg',
        tags: ['Fast Food','Fry','Lunch']

      }  ,
      {
        id:6,
        name: 'Soup',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Fiji'],
        stars: 4.1,
        imageUrl: 'F6.jpg',
        tags: ['Fast Food','Soup','Lunch']

      }  
      

    
    ]
}
}