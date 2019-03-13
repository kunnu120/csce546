import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { orders } from './orders/orders.page';
import * as firebase from 'firebase';

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
  constructor() {
    var config = {
      apiKey: "AIzaSyChZSnSBcwWGQv2GAf4VBIhyB0P4CjkHtI",
      authDomain: "restaurant-16ab5.firebaseapp.com",
      databaseURL: "https://restaurant-16ab5.firebaseio.com",
      projectId: "restaurant-16ab5",
      storageBucket: "restaurant-16ab5.appspot.com",
      messagingSenderId: "405504601979"
    };
    firebase.initializeApp(config);
    this.listOfOrders = new orders();
    localStorage.setItem('orders', JSON.stringify(this.listOfOrders));
    // firebase.database().ref('orders').push().set(JSON.stringify(this.listOfOrders));
    // firebase.database().ref('Breakfast').push(new Item('Dosa', 5.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Lunch').push(new Item('Biryani', 12.75, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Dinner').push(new Item('Butter Chicken', 8.25, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Drinks').push(new Item('Lassi', 2.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Desserts').push(new Item('Kheer', 3.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Other').push(new Item('Avakai', 1.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Breakfast').push(new Item('Idli', 4.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Lunch').push(new Item('Chicken Curry', 7.75, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Dinner').push(new Item('Chiken Tikka Masala', 8.75, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Drinks').push(new Item('Thumbs Up', 1.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Desserts').push(new Item('Ladoo', 1.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Other').push(new Item('Curd', 1.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Breakfast').push(new Item('Upma', 4.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Lunch').push(new Item('Naan', 3.95, 'Lunch', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Dinner').push(new Item('Roti', 11.00, 'Dinner', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Drinks').push(new Item('Sugar Cane Juice', 2.25, 'Drinks', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Desserts').push(new Item('Gulab Jamun', 4.25, 'Desserts', 'dosa', '/assets/Breakfast.jpg'));
    // firebase.database().ref('Other').push(new Item('Chutney', 2.25, 'Other', 'dosa', '/assets/Breakfast.jpg'));
  }
}
