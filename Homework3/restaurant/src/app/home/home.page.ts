import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {

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
}
