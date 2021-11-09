import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  @Output() recipewasselected:EventEmitter<Recipe> = new EventEmitter;

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectedRecipe(recipe:Recipe){
    this.recipewasselected.emit(recipe);
  }

}
