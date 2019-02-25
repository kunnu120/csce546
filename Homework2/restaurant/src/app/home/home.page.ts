import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { orders } from '../orders/orders.page';
import { Item } from '../list/list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listOfOrders: orders;
  public breakfastItems: Array<Item>;
  public lunchItems: Array<Item>;
  public dinnerItems: Array<Item>;
  public drinkItems: Array<Item>;
  public dessertItems: Array<Item>;
  public otherItems: Array<Item>;
  constructor(private route: Router) {
    localStorage.clear();
    this.listOfOrders = new orders();
    this.listOfOrders.createOrder(0);
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
