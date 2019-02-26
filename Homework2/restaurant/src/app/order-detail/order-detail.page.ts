import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { order, orders } from '../orders/orders.page';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  currOrder: order;
  Orders: orders;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.currOrder = JSON.parse(params['selectedOrder']);});
  }

  ngOnInit() {
  }
  newOrder() {
    this.Orders = JSON.parse(localStorage.getItem('orders'));
    this.Orders.orderList.push(new order(0));
    this.Orders.currentOrder = this.Orders.orderList[this.Orders.orderList.length-1];
    localStorage.setItem('orders', JSON.stringify(this.Orders));
  }
  goBack() {
    this.route.navigate(['/orders']);
  }
}
