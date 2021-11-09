import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingredientadded : EventEmitter<Ingredient>=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  OnAdd(){
  const name=this.nameInputRef.nativeElement.value;
  const amount=this.amountInputRef.nativeElement.value;
  const ingredient=new Ingredient(name,amount);
  console.log("OnAdd ingredient="+ingredient.name+" "+ingredient.amount+JSON.stringify(ingredient));  
  this.ingredientadded.emit(ingredient);
  }
}
