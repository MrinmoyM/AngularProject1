import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'], 
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeService : RecipesService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
        .subscribe(
          (recipe: Recipe) => {
            this.selectedRecipe = recipe;
          }
        );
  }
  
}
