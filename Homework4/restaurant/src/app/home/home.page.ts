import { Component } from '@angular/core';
import { Router, Data } from '@angular/router';
import * as firebase from 'firebase';
import { orders } from '../orders/orders.page';
// import { Item } from '../list/list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userID: string;
  owner: boolean;
  restaurantName: string;
  constructor(private route: Router,) {
    this.userID = firebase.auth().currentUser.uid;
    var self = this;
    firebase.database().ref('Orders/'+this.userID).on('value', function(snapshot) {
      if(!snapshot.exists()) {
        firebase.database().ref('Orders/'+self.userID).set({'userOrder' : JSON.stringify(new orders())});
      }
    });
    firebase.database().ref('User Info/'+this.userID).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var x = cShot.key;
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid+'/'+x).on('value', function(cShut) {
          var y = cShut.val();
          if(y['User Type'] == "Visitor") {
            self.owner = false;
          } else if(y['User Type'] == "Store Owner") {
            self.owner = true;
          }
        });
      });
    });
    firebase.database().ref('Restaurant Info').on('value', function(snapshot) {
      var x = snapshot.val();
      self.restaurantName = x.Name;
    });
  }
  menuBreakfast() {
    this.route.navigate(['/menu', {menuType: 'Breakfast'}]);
  }
  menuLunch() {
    this.route.navigate(['/menu', {menuType: 'Lunch'}]);
  }
  menuDinner() {
    this.route.navigate(['/menu', {menuType: 'Dinner'}]);
  }
  menuDrinks() {
    this.route.navigate(['/menu', {menuType: 'Drinks'}]);
  }
  menuDesserts() {
    this.route.navigate(['/menu', {menuType: 'Desserts'}]);
  }
  menuOther() {
    this.route.navigate(['/menu', {menuType: 'Other'}]);
  }
  addItem() {
    this.route.navigate(['/list']);
  }
  storeSettings() {
    this.route.navigate(['/store-settings']);
  }
}
