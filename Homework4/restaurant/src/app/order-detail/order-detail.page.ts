import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { order, orders } from '../orders/orders.page';
import { Item } from '../list/list.page';
import * as firebase from 'firebase';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  currOrder: order;
  static Orders: orders;
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
    firebase.database().ref('Orders/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var x = cShot.val();
        OrderDetailPage.Orders = JSON.parse(x);
      });
    });
    if(OrderDetailPage.Orders.currentOrder.totalPrice != 0) {
      OrderDetailPage.Orders.orderList.push(new order(0));
      OrderDetailPage.Orders.currentOrder = OrderDetailPage.Orders.orderList[OrderDetailPage.Orders.orderList.length-1];
      firebase.database().ref('Orders/'+firebase.auth().currentUser.uid).set({'userOrder' : JSON.stringify(OrderDetailPage.Orders)});
    } else {
      alert("You have checked out the Order")
    }
  }
  goBack() {
    this.route.navigate(['/orders']);
  }
}
