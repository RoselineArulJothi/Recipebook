import { Recipe } from "./recipe.model"

export class RecipeService{
    
    recipes: Recipe[] = [
        new Recipe(
          'Butter Chicken Curry',
        'Tasty and delicious Lunch',
        'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90'),
        new Recipe(
          'Dosa',
        'Tasty and delicious breakfast',
        'https://i.ndtvimg.com/i/2016-05/mysore-dosa_625x350_51462306619.png'),
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      
}