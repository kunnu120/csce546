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
    this.route.navigate(['/order-detail', {selectedOrder: x}]);
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
    this.currentOrder = tOrder;
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
  addItem(x: Item) {
    this.items.push(x);
    this.totalItems++;
    this.totalPrice += x.price;
  }
}
