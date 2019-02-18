import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  typeOfMenu: string;
  constructor(private route: ActivatedRoute, private r: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.typeOfMenu = params['menuType'];});
  }
}
