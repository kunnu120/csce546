import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.page.html',
  styleUrls: ['./store-settings.page.scss'],
})
export class StoreSettingsPage {
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  constructor(private route: Router) {
    var self = this;
    firebase.database().ref('Restaurant Info').on('value', function(snapshot) {
      var x = snapshot.val();
      self.name = x.Name;
      self.description = x.Description;
      self.location = x.Location;
      self.imageUrl = x['Image Url'];
    });
  }
  updateSettings() {
    var info = {
      'Name' : this.name,
      'Description' : this.description,
      'Location' : this.location,
      'Image Url' : this.imageUrl
    };
    firebase.database().ref('Restaurant Info').set(info);
  }
  goBack() {
    this.route.navigate(['/home']);
  }
}
