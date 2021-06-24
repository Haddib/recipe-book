import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe} from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Schnitzel', 
  //     "It's schnitzel... just schnitzel.", 
  //     "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
  //     [
  //       new Ingredient("Meat", 1),
  //       new Ingredient("French Fry", 20)
  //     ]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){ return this.recipes.slice() };

  getRecipe(id: number){ return this.recipes[id] };

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients); 
  }

  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}