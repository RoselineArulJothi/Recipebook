import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//import { RecipesModule } from './recipes/recipes.module';
//import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipedetailComponent,
    RecipelistComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RecipesModule,
    //ShoppinglistModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
