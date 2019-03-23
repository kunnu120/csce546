import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../list/list.page';
import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage {
  public typeOfMenu: string;
  public static menuItems: Item [];
  public instance = MenuPage;
  public searchWord: string;
  constructor(private route: ActivatedRoute, private r: Router) {
    this.route.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
    MenuPage.menuItems = [];
    firebase.database().ref(this.typeOfMenu).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var k = cShot.key;
        firebase.database().ref(cShot.ref.parent.toString().substring(cShot.ref.parent.toString().lastIndexOf('/'))).child(k).on('value', function(items) {
          let x = items.val();
          MenuPage.menuItems.push(new Item(x.name, x.price, x.category, x.description, x.photo));
        });
      });
    });
    this.searchWord = "";
  }
  goBack() {
    this.r.navigate(['/home'])
  }
  goToItem(x: Item) {
    this.r.navigate(['/item-detail', {selectedItem: JSON.stringify(x), menuType: this.typeOfMenu}]);
  }
  searchMenuItems() {
    this.reset();
    MenuPage.menuItems = MenuPage.menuItems.filter((item) => {
      return item.name.toLowerCase().indexOf(this.searchWord.toLowerCase())>-1;
    });
  }
  reset() {
    MenuPage.menuItems = [];
    firebase.database().ref(this.typeOfMenu).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var k = cShot.key;
        firebase.database().ref(cShot.ref.parent.toString().substring(cShot.ref.parent.toString().lastIndexOf('/'))).child(k).on('value', function(items) {
          let x = items.val();
          MenuPage.menuItems.push(new Item(x.name, x.price, x.category, x.description, x.photo));
        });
      });
    });
  }
}
