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
  owner: boolean;
  constructor(private route: Router) {
    var self = this;
    firebase.database().ref('Restaurant Info').on('value', function(snapshot) {
      var x = snapshot.val();
      self.name = x.Name;
      self.description = x.Description;
      self.location = x.Location;
      self.imageUrl = x['Image Url'];
    });
    var self = this;
    firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var x = cShot.key;
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid+'/'+x).on('value', function(cShut) {
          var y = cShut.val();
          if(y['User Type'] == "Visitor") {
            self.owner = false;
          } else if(y['User Type'] == "Store Owner") {
            self.owner = true;
          }
        });
      });
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
