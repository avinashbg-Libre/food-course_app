import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { StarRatingModule } from 'angular-star-rating';
import { Search } from './search/search';
import { FormsModule } from '@angular/forms';

import { Stag } from './stag/stag';
import { FoodPage } from './food-page/food-page';
import { CartPage } from './cart-page/cart-page';
import { NotFound } from './not-found/not-found';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    Search,

    Stag,
      FoodPage,
      CartPage,
      NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
