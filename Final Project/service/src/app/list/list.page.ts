import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  userName: string;
  userBirthDate: string;
  userProfilePic: string;
  constructor() {
    this.userName = "";
    this.userBirthDate = "";
    this.userProfilePic = "";
    var self = this;
    firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
      snapshot.forEach(function(cSnap) {
        var k = cSnap.key
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid+'/'+k).on('value', function(cShot) {
          var x = cShot.val();
          self.userName = x['Name'];
          self.userBirthDate = x['Birth Date'];
          self.userProfilePic = x['Profile Pic'];
          self.userBirthDate = self.userBirthDate.substring(5,7)+'/'+self.userBirthDate.substring(8)+'/'+self.userBirthDate.substring(0,4);
        });
      });
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
