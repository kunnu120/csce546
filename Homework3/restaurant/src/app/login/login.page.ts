import { Component} from '@angular/core';
import { Router} from '@angular/router'
// import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  email: string;
  password: string;
  constructor(private route: Router) {
    this.email = "";
    this.password = "";
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
    firebase.auth().signInWithPopup(loginInfo).then(function(res) {
      var name = res.user;
      // firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : name, 'Birth Date' : "2001-01-01", 'User Type' : "Visitor"});
      // alert("Signed in as a Visitor.");
      self.route.navigate(['/home']);
    }).catch(function() {
      alert("Failed to Login Using Google Account.");
    });
  }
  signUp() {
    this.route.navigate(['/signup']);
  }
}
