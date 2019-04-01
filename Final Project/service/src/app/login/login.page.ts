import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  signUp() {
    this.route.navigate(['/signup']);
  }
  login() {
    if(this.email == "" || this.password == "") {
      alert("Please enter an Username and/or Password");
    } else {
      var self = this;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function() {
        self.route.navigate(['/home']);
      }).catch(function() {
        alert("The Email and/or Password you entered is/are incorrect.");
      });
      this.email = "";
      this.password = "";
    }
  }
  loginGoogle() {
    var loginInfo = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(loginInfo).then(function() {
      firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
        if(!snapshot.exists()) {
          self.route.navigate(['/signup']);
        } else {
          self.route.navigate(['/home']);
        }
      });
    }).catch(function() {
      alert("Failed to Login Using Google Account.");
    });
  }
}
