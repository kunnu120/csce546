import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../create-post/create-post.page';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recentPosts: {
    profile: {
      Name: any,
      ProfilePic: any
    },
    thePost: Post
  } [];
  Op: boolean;
  constructor(private route: Router) {
    this.Op = false;
    this.recentPosts = [];
    var self = this;
    firebase.database().ref('Posts').on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var k = cShot.key;
        firebase.database().ref('Posts/'+k).on('value', function(cSnap) {
          cSnap.forEach(function(thePost) {
            var x = thePost.val();
            // console.log(x);
            var tempPost: Post = new Post(x.images, x.title, x.price, x.description, x.location.lat, x.location.lon, x.active, x.uid);
            firebase.database().ref('User Info/'+x.uid).on('value', function(snapshot) {
              snapshot.forEach(function(cSnap) {
                var ke = cSnap.key;
                firebase.database().ref('User Info/'+x.uid+'/'+ke).on('value', function(cShot) {
                  var prof = {
                    profile: {
                      Name: cShot.val().Name,
                      ProfilePic: cShot.val()['Profile Pic']
                    },
                    thePost: tempPost
                  };
                  self.recentPosts.push(prof);
                });
              });
            });
          });
        });
      });
    });
  }
  newPost(){
    this.route.navigate(['/create-post']);
  }
  goToPost(post: any) {
    this.route.navigate(['/post-page', {currPost: JSON.stringify(post)}]);
  }
  viewMessages() {
    this.route.navigate(['/messages']);
  }
  goToProfile(Uid: any) {
    this.route.navigate(['/list', {other: true, uid: Uid}]);
  }
  onScroll(event: any) {
    if(this.Op) {
      var posts = document.getElementsByClassName('op');
      for (var i=0; i<posts.length; i++) {
        posts[i].setAttribute("style", "opacity: .5");
      }
    }
  }
  setOp(event: any) {
    this.Op = true;
  }
  resetOp(event: any) {
    this.Op = false;
  }
}
