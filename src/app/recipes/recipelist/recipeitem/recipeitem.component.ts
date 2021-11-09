import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  @Input()
  recipe:Recipe;

 @Output() recipeselected : EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeselected.emit();
  }

}
