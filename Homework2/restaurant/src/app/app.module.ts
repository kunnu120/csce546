import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { orders } from './orders/orders.page';
import { Item } from './list/list.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  listOfOrders: orders;
  public breakfastItems: Array<Item>;
  public lunchItems: Array<Item>;
  public dinnerItems: Array<Item>;
  public drinkItems: Array<Item>;
  public dessertItems: Array<Item>;
  public otherItems: Array<Item>;
  constructor() {
    localStorage.clear();
    this.listOfOrders = new orders();
    localStorage.setItem('orders', JSON.stringify(this.listOfOrders));
    this.breakfastItems = [];
    this.lunchItems = [];
    this.dinnerItems = [];
    this.drinkItems = [];
    this.dessertItems = [];
    this.otherItems = [];
    this.breakfastItems.push(new Item('Dosa', 5.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    this.lunchItems.push(new Item('Biryani', 12.75, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    this.dinnerItems.push(new Item('Butter Chicken', 8.25, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    this.drinkItems.push(new Item('Lassi', 2.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    this.dessertItems.push(new Item('Kheer', 3.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    this.otherItems.push(new Item('Avakai', 1.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
    this.breakfastItems.push(new Item('Idli', 4.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    this.lunchItems.push(new Item('Chicken Curry', 7.75, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    this.dinnerItems.push(new Item('Chiken Tikka Masala', 8.75, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    this.drinkItems.push(new Item('Thumbs Up', 1.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    this.dessertItems.push(new Item('Ladoo', 1.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    this.otherItems.push(new Item('Curd', 1.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
    this.breakfastItems.push(new Item('Upma', 4.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    this.lunchItems.push(new Item('Naan', 3.95, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    this.dinnerItems.push(new Item('Roti', 11.00, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    this.drinkItems.push(new Item('Sugar Cane Juice', 2.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    this.dessertItems.push(new Item('Gulab Jamun', 4.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    this.otherItems.push(new Item('Chutney', 2.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
    localStorage.setItem('Breakfast', JSON.stringify(this.breakfastItems));
    localStorage.setItem('Lunch', JSON.stringify(this.lunchItems));
    localStorage.setItem('Dinner', JSON.stringify(this.dinnerItems));
    localStorage.setItem('Drinks', JSON.stringify(this.drinkItems));
    localStorage.setItem('Desserts', JSON.stringify(this.dessertItems));
    localStorage.setItem('Other', JSON.stringify(this.otherItems));
  }
}
