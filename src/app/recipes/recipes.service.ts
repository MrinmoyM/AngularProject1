import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
@Injectable()
export class RecipesService{
    private recipes : Recipe[] = [
        new Recipe("Beef Recipe","Beef Steak",
         "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg",
        [
            new Ingredient('Beef', 1),
            new Ingredient('Potato', 2)
        ]),
        new Recipe("Mutton Recipe","Mutton Chap", 
        "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg", 
        [
            new Ingredient('Mutton', 1),
            new Ingredient('Onion', 2),
            new Ingredient('Curd', 1)
            
        ]),
      ];
    selectedRecipe =new EventEmitter<Recipe>();
    constructor(private shopService: ShoppingListService){}
    getRecipes(){
          return this.recipes.slice(); // to get a copy
    }
    addIngredientsToShopping(ingredients : Ingredient[]){
        this.shopService.addIngredients(ingredients);
    }
    
}