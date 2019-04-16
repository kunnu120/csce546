import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  userName: string;
  userBirthDate: string;
  userProfilePic: string;
  other: boolean;
  title: string;
  constructor(private r: ActivatedRoute, private route: Router) {
    this.title = "";
    this.title= "Account Info";
    this.r.params.subscribe((params) => {
      this.other = params['other'];
    });
    this.userName = "";
    this.userBirthDate = "";
    this.userProfilePic = "";
    var self = this;
    var uid = firebase.auth().currentUser.uid;
    if(this.other != null) {
      this.r.params.subscribe((params) => {
        uid = params['uid'];
      });
      this.title = "Profile Page";
    }
    firebase.database().ref('User Info/'+uid).on('value', function(snapshot) {
      snapshot.forEach(function(cSnap) {
        var k = cSnap.key
        firebase.database().ref('User Info/'+uid+'/'+k).on('value', function(cShot) {
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
  goBack() {
    this.route.navigate(['/home']);
  }
}
