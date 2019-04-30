import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public itemName: string;
  public price: number;
  public category: string;
  public description: string;
  public photoUrl: string;
  public imag: any;
  constructor(private route: Router, private camera: Camera) {

  }

  ngOnInit() {
  }

  goBack() {
    this.route.navigate(['/home'])
  }
  createItem() {
    var tItem = new Item(this.itemName, this.price, this.category, this.description, this.photoUrl);
    firebase.database().ref(this.category).push(tItem);
    this.itemName = "";
    this.price = null;
    this.category = "";
    this.description = "";
    this.photoUrl = "";
    this.route.navigate(['/item-detail', {selectedItem: JSON.stringify(tItem), menuType: tItem.category}]);
  }
  async addImage() {
    document.getElementById('photoUrlInput').setAttribute("disabled", "true");
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }
    await this.camera.getPicture(options).then((img) => {
      console.log(img);
      this.imag = img;
    });
    const name = new Date().getTime().toString();
    var self = this;
    firebase.storage().ref().child('Post Pics/'+firebase.auth().currentUser.uid+'/'+name).putString(this.imag, 'base64', {contentType: 'image/jpeg'}).then((x) => {
      firebase.storage().ref().child('Post Pics/'+firebase.auth().currentUser.uid+'/'+name).getDownloadURL().then((url) =>{
        self.photoUrl = url;
      });
    });
  }
}
export class Item {
  public name: string;
  public price: number;
  public category: string;
  public description: string;
  public photo: string;
  constructor(iname: string, iprice: number, icat: string, ides: string, iphoto: string) {
    this.name = iname;
    this.price = iprice;
    this.description = ides;
    this.photo = iphoto;
    this.category = icat;
  }
}
