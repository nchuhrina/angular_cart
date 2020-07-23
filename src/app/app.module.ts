import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './cart/cart.component';
import {ProductComponent}  from './catalog/product.component';
import {CartProductComponent} from './cart/cart.product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CatalogComponent, ShoppingCartComponent, ProductComponent, CartProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
