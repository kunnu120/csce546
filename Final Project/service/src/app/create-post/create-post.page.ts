import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

declare var google;

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
  constructor(private route: Router, private camera: Camera, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.title = "";
    this.description = "";
    this.location = "";
    this.images = [];
  }

  ngOnInit() {
  }
  cancelPost() {
    this.route.navigate(['/home']);
  }
  makePost() {

  }
  async addImages() {
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    var meta = {
      contentType: 'image/jpeg'
    };
    const result = await this.camera.getPicture(options);
    firebase.storage().ref('Post Pics/').put(result, meta).then(function(snapshot) {
      this.images.push(snapshot.downloadURL);
    });
  }
}
export class Post {
  public images: string[];
  public title: string;
  public price: number;
  public description: string;
  public location : {
    lat: number,
    lon: number
  };
  public active: boolean;
  constructor(imgs: string[], ttl: string, prc: number, dscr: string, latitude: number, longitude: number) {
    this.images = [];
    for(var i: number=0; i<imgs.length; i++) {
      this.images.push(imgs[i]);
    }
    this.title = ttl;
    this.price = prc;
    this.description = dscr;
    this.location.lat = latitude;
    this.location.lon = longitude;
    this.active = true;
  }
  deactivate() {
    this.active = false;
  }
}
