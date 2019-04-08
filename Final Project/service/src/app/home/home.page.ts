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
  recentPosts: Post[];
  constructor(private route: Router) {
    this.recentPosts = [];
    var self = this;
    firebase.database().ref('Posts').on('value', function(snapshot) {
      snapshot.forEach(function(cShot) {
        var k = cShot.key;
        firebase.database().ref('Posts/'+k).on('value', function(cSnap) {
          cSnap.forEach(function(thePost) {
            var x = thePost.val();
            console.log(x);
            self.recentPosts.push(new Post(x.images, x.title, x.price, x.description, x.location.lat, x.location.lon, x.active, x.uid));
          });
        });
      });
    });
  }
  newPost(){
    this.route.navigate(['/create-post']);
  }

}
