import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../list/list.page';
import { orders, order } from '../orders/orders.page';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public item: Item;
  public typeOfMenu: string;
  quantity: number;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.item = JSON.parse(params['selectedItem']);});
    this.r.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
    this.quantity = 1;
  }

  ngOnInit() {
  }
  addToOrder() {
    var Orders: orders;
    Orders = JSON.parse(localStorage.getItem('orders'));
    for(var i:number=0; i<this.quantity; i++) {
      Orders.currentOrder.items.push(this.item);
      Orders.currentOrder.totalItems++;
      Orders.currentOrder.totalPrice += this.item.price;
      Orders.orderList[Orders.orderList.length-1] = Orders.currentOrder;
    }
    localStorage.setItem('orders', JSON.stringify(Orders));
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
