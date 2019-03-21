import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { order, orders } from '../orders/orders.page';
import { Item } from '../list/list.page';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  currOrder: order;
  Orders: orders;
  currOrderShortened: Item[];
  numOfItems: number[];
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.currOrder = JSON.parse(params['selectedOrder']);});
    this.currOrderShortened = [];
    this.numOfItems = [];
    this.currOrderShortened.push(this.currOrder.items[0]);
    this.numOfItems.push(1);
    for(var i:number=1; i<this.currOrder.items.length; i++) {
      var ind: number = -1;
      for(var j:number=0; j<this.currOrderShortened.length; j++) {
        if(this.currOrder.items[i].name == this.currOrderShortened[j].name) {
          ind = j;
        }
      }
      if(ind != -1) {
        this.numOfItems[ind]++;
      } else {
        this.currOrderShortened.push(this.currOrder.items[i]);
        this.numOfItems.push(1);
      }
    }
  }

  ngOnInit() {
  }
  newOrder() {
    this.Orders = JSON.parse(localStorage.getItem('orders'));
    if(this.Orders.currentOrder.totalPrice != 0) {
      this.Orders.orderList.push(new order(0));
      this.Orders.currentOrder = this.Orders.orderList[this.Orders.orderList.length-1];
      localStorage.setItem('orders', JSON.stringify(this.Orders));
    } else {
      alert("You have checked out the Order")
    }
  }
  goBack() {
    this.route.navigate(['/orders']);
  }
}
