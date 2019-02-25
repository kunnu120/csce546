import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { order } from '../orders/orders.page';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  currOrder: order;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.currOrder = params['selectedItem'];});
  }

  ngOnInit() {
  }
  goBack() {
    this.route.navigate(['/orders']);
  }
}
