import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  images: string[];
  title: string;
  price: number;
  description: string;
  location: string;
  constructor(private route: Router) {
    this.title = "";
    this.description = "";
    this.location = "";
    this.images = [];
    this.images.push("https://i.ytimg.com/vi/jsAoS2ghTxk/maxresdefault.jpg");
    this.images.push("https://happyfm.es/wp-content/uploads/2019/01/v-bts-publica-scenery-la-cancion-mas-especial-de-su-vida-01.jpg");
    this.images.push("https://media.allure.com/photos/5b76eb54b60c70133b1eaac3/master/pass/BTS%20V%20mini%20ponytail%20hair.jpg");
  }

  ngOnInit() {
  }
  cancelPost() {
    this.route.navigate(['/home']);
  }
  makePost() {

  }
  addImages() {

  }
}
export class Post {
  public images: string[];
  public title: string;
  public price: number;
  public description: string;
  public location: string;
  public active: boolean;
  constructor(imgs: string[], ttl: string, prc: number, dscr: string, loc: string) {
    this.images = [];
    for(var i: number=0; i<imgs.length; i++) {
      this.images.push(imgs[i]);
    }
    this.title = ttl;
    this.price = prc;
    this.description = dscr;
    this.location = loc;
    this.active = true;
  }
  deactivate() {
    this.active = false;
  }
}
