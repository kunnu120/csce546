import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../list/list.page';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public item: Item;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe(params => {this.item = params['selectedItem'];});
  }

  ngOnInit() {
  }

}
