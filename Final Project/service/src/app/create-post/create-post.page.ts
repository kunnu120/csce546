import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
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
  constructor(private route: Router, private camera: Camera, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private popoverCtrl: PopoverController) {
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
  addImages() {
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    var meta = {
      contentType: 'image/jpeg'
    };
    const result = "file:///home/maheedhar/Pictures/IMG_20180320_020445.jpg"//await this.camera.getPicture(options);
    firebase.storage().ref('Post Pics/'+firebase.auth().currentUser.uid).put(result, meta).then(function(snapshot) {
      this.images.push(snapshot.downloadURL);
    });
  }
  async chooseLocationOnMap(myEv: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: myEv,
      translucent: false,
    });
    return await popover.present();
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
  public uid: string;
  constructor(imgs: string[], ttl: string, prc: number, dscr: string, latitude: number, longitude: number, ac: boolean, _uid: string) {
    this.images = [];
    for(var i: number=0; i<imgs.length; i++) {
      this.images.push(imgs[i]);
    }
    this.title = ttl;
    this.price = prc;
    this.description = dscr;
    this.location = {
      lat: latitude,
      lon: longitude
    };
    this.active = ac;
    this.uid = _uid;
  }
  deactivate() {
    this.active = false;
  }
}
