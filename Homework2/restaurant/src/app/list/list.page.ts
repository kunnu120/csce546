import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public items: Array<Item>;
  public itemName: string;
  public price: number;
  public category: string;
  public description: string;
  public photoUrl: string;
  constructor() {
    this.items = [];
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  createItem() {
    this.items.push(new Item(this.itemName, this.price, this.category, this.description, this.photoUrl));
    localStorage.clear();
    localStorage.setItem('allItems', JSON.stringify(this.items));
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
    this.category = icat;
    this.description = ides;
    this.photo = iphoto;
    document.write(JSON.stringify(this));
  }
}
