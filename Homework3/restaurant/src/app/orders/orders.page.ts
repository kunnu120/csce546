import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../list/list.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public allOrders: orders;
  constructor(private route: Router) {
    this.allOrders = JSON.parse(localStorage.getItem('orders'));
  }
  ngOnInit() {
  }
  goToOrder(x: order) {
    if(x.totalItems > 0) {
      this.route.navigate(['/order-detail', {selectedOrder: JSON.stringify(x)}]);
    } else {
      alert("This order is has no items. Go to the home page and navigate to the items you would like to add to your order.");
    }
  }
}
export class orders {
  public orderList: order[];
  public currentOrder: order;
  constructor() {
    this.orderList = [];
    this.createOrder(0);
  }
  createOrder(orderDate: number) {
    var tOrder: order = new order(orderDate);
    this.orderList.push(tOrder);
    this.currentOrder = this.orderList[this.orderList.length-1];
  }
  addAnItem(x: Item) {
    this.currentOrder.addAnItem(x);
    this.orderList[this.orderList.length-1] = this.currentOrder;
  }
}
export class order {
  public items: Item[];
  public totalItems: number;
  public date: number;
  public totalPrice: number;
  constructor(orderDate: number) {
    this.items = [];
    this.totalItems = 0;
    this.totalPrice = 0;
    this.date = orderDate;
  }
  addAnItem(x: Item) {
    this.items.push(x);
    this.totalItems++;
    this.totalPrice += x.price;
  }
}
