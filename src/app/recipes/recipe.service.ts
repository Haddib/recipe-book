import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 
      "It's schnitzel... just schnitzel.", 
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fry", 20)
      ]
    )
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){ return this.recipes.slice() };

  getRecipe(id: number){ return this.recipes[id] };

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients); 
  }
}