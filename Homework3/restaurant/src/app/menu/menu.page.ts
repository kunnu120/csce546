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
    this.menuItems = [];
    firebase.database().ref(this.typeOfMenu).on('value', function(snapshot) {
      snapshot.forEach(el => {
        var temp = <any> el;
        this.menuItems.push(new Item(temp.name, temp.price, temp.category, temp.description, temp.photoUrl));
      });
    });
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
