import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../list/list.page';
import { orders, order } from '../orders/orders.page';
import * as firebase from 'firebase';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public item: Item;
  public typeOfMenu: string;
  quantity: number;
  public static Orders;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.item = JSON.parse(params['selectedItem']);});
    this.r.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
    this.quantity = 1;
  }

  ngOnInit() {
  }
  addToOrder() {
    var k = [];
    firebase.database().ref('Orders/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        k.push(cShot.key);
        firebase.database().ref('Orders/'+cShot.ref.parent.toString().substring(cShot.ref.parent.toString().lastIndexOf('/'))+'/'+k[k.length-1]).on('value', function(cSnap) {
          var m = cSnap.val();
          // console.log(m);
          ItemDetailPage.Orders = m;
        });
      });
    });
    for(var i:number=0; i<this.quantity; i++) {
      ItemDetailPage.Orders.currentOrder.items.push(this.item);
      ItemDetailPage.Orders.currentOrder.totalItems++;
      ItemDetailPage.Orders.currentOrder.totalPrice += this.item.price;
      ItemDetailPage.Orders.orderList[ItemDetailPage.Orders.orderList.length-1] = ItemDetailPage.Orders.currentOrder;
    }
    var s = {};
    s['userOrder'] = JSON.stringify(ItemDetailPage.Orders);
    firebase.database().ref('Orders/'+firebase.auth().currentUser.uid).update(s);
    if(this.quantity > 1) {
      alert("These items has been added to your order.");
    } else if(this.quantity == 1) {
      alert("This item has been added to your order.");
    }
  }
  goBack() {
    this.route.navigate(['/menu', {menuType: this.typeOfMenu}]);
  }
}
