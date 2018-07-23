import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: Recipe;
  constructor(private recipeService : RecipesService) { }

  ngOnInit() {
  }
  
  addToShoppingList(){
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }
}
