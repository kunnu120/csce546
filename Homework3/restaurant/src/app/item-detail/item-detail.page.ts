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
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.item = JSON.parse(params['selectedItem']);});
    this.r.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
  }

  ngOnInit() {
  }
  addToOrder() {
    var Orders: orders;
    Orders = JSON.parse(localStorage.getItem('orders'));
    Orders.currentOrder.items.push(this.item);
    Orders.currentOrder.totalItems++;
    Orders.currentOrder.totalPrice += this.item.price;
    Orders.orderList[Orders.orderList.length-1] = Orders.currentOrder;
    localStorage.setItem('orders', JSON.stringify(Orders));
    alert("This item has been added to order.");
  }
  goBack() {
    this.route.navigate(['/menu', {menuType: this.typeOfMenu}]);
  }
}
