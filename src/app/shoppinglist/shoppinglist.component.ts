import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients : Ingredient[] =[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddedIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    console.log("OnAddedIngredient ingredient="+JSON.stringify( ingredient));
    console.log("OnAddedIngredient ingredients="+JSON.stringify( this.ingredients));
    }
}
