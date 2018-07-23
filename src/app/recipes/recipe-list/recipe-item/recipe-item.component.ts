import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipesService } from '../../recipes.service';
//import { EventEmitter } from 'selenium-webdriver';
//import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem : Recipe;
  //@Output() recipeItemSelectEvent = new EventEmitter<Recipe>();
  constructor(private recipeService : RecipesService) { }

  ngOnInit() {
  }
  selectedRecipeItem(selectedRecipeItem : Recipe){
    //console.log(selectedRecipeItem);
    this.recipeService.selectedRecipe.emit(selectedRecipeItem);
    //this.recipeItemSelectEvent.emit(selectedRecipeItem);
  }
}
