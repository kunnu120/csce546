import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../list/list.page';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  typeOfMenu: string;
  menuItems: Item [];
  constructor(private route: ActivatedRoute, private r: Router) {
    this.route.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
    var userID = firebase.auth().currentUser.uid;
    this.menuItems = [];
    if(this.typeOfMenu = 'Breakfast') {
      firebase.database().ref('Breakfast'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    } else if(this.typeOfMenu == 'Lunch') {
      firebase.database().ref('Lunch'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    } else if(this.typeOfMenu == 'Dinner') {
      firebase.database().ref('Dinner'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    } else if(this.typeOfMenu == 'Drinks') {
      firebase.database().ref('Drinks'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    } else if(this.typeOfMenu == "Desserts") {
      firebase.database().ref('Desserts'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    } else if(this.typeOfMenu == "Other") {
      firebase.database().ref('Other'+userID).on('value', items => {
        this.menuItems = sToArray(items);
      });
    }
  }
  goBack() {
    this.r.navigate(['/home'])
  }
  goToItem(x: Item) {
    this.r.navigate(['/item-detail', {selectedItem: JSON.stringify(x), menuType: this.typeOfMenu}]);
  }
  ngOnInit() {

  }
}
export const sToArray = snapshot => {
  let rArr = [];
  snapshot.forEach(childSnapshot => {
    var temp: Item = childSnapshot.val();
    rArr.push(temp);
  });
  return rArr;
}
