import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public breakfastItems: Array<Item>;
  public lunchItems: Array<Item>;
  public dinnerItems: Array<Item>;
  public drinkItems: Array<Item>;
  public dessertItems: Array<Item>;
  public otherItems: Array<Item>;
  public itemName: string;
  public price: number;
  public category: string;
  public description: string;
  public photoUrl: string;
  constructor() {
    this.breakfastItems = [];
    this.lunchItems = [];
    this.dinnerItems = [];
    this.drinkItems = [];
    this.dessertItems = [];
    this.otherItems = [];
    this.breakfastItems.push(new Item('Dosa', 12.25, 'Breakfast', 'dosa', '/assets/Breakfast.jpg'));
    localStorage.setItem('Breakfast', JSON.stringify(this.breakfastItems));
    localStorage.setItem('Lunch', JSON.stringify(this.lunchItems));
    localStorage.setItem('Dinner', JSON.stringify(this.dinnerItems));
    localStorage.setItem('Drinks', JSON.stringify(this.drinkItems));
    localStorage.setItem('Desserts', JSON.stringify(this.dessertItems));
    localStorage.setItem('Other', JSON.stringify(this.otherItems));
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  createItem() {
    var array: Item [] = JSON.parse(localStorage.getItem(this.category));
    array.push(new Item(this.itemName, this.price, this.category, this.description, this.photoUrl));
    localStorage.setItem(this.category, JSON.stringify(array));
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
