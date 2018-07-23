import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //@Output() ingredientAddEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient( ){
    let ingredientData : Ingredient = new Ingredient(this.nameInputRef.nativeElement.value,
       this.amountInputRef.nativeElement.value);     
    this.shoppingListService.addIngredient(ingredientData);
    
  }
}
