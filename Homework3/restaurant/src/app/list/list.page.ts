import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public itemName: string;
  public price: number;
  public category: string;
  public description: string;
  public photoUrl: string;
  constructor(private route: Router) {

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  goBack() {
    this.route.navigate(['/home'])
  }
  createItem() {
    var tItem = new Item(this.itemName, this.price, this.category, this.description, this.photoUrl);
    firebase.database().ref(this.category).push(tItem);
    this.itemName = "";
    this.price = null;
    this.category = "";
    this.description = "";
    this.photoUrl = "";
    this.route.navigate(['/item-detail', {selectedItem: JSON.stringify(tItem), menuType: tItem.category}]);
  }
}
export class Item {
  public name: string;
  public price: number;
  public category: string;
  public description: string;
  public photo: string;
  constructor(iname: string, iprice: number, icat: string, ides: string, iphoto: string) {
    this.name = iname;
    this.price = iprice;
    this.description = ides;
    this.photo = iphoto;
    this.category = icat;
  }
}
