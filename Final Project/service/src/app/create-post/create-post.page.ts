import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  cancelPost() {
    this.route.navigate(['/home']);
  }
  makePost() {

  }
}
export class Post {
  public images: string[];
  public title: string;
  public price: number;
  public description: string;
  // public location: google.maps.LatLng;
}
