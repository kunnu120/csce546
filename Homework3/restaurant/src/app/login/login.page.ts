import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
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
  constructor(private route: Router, private r: ActivatedRoute) {
    this.email = "";
    this.password = "";
  }
  login() {
    if(this.email == "" || this.password == "") {
      alert("Please enter an Username and/or Password");
    } else {
      var a: boolean = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function() {
        a = false;
        alert("The Email and/or Password you entered is/are incorrect.");
      });
      if(a) {
        this.route.navigate(['/home']);
      }
      this.email = "";
      this.password = "";
    }
  }
  loginGoogle() {
    var loginInfo = new firebase.auth.GoogleAuthProvider();
    var a: boolean = true;
    firebase.auth().signInWithPopup(loginInfo).catch(function() {
      a = false;
    });
    if(a) {
      this.route.navigate(['/home']);
    }
  }
  loginFacebook() {
    var loginInfo = new firebase.auth.FacebookAuthProvider();
    var a: boolean = true;
    firebase.auth().signInWithPopup(loginInfo).catch(function() {
      a = false;
    });
    if(a) {
      this.route.navigate(['/home']);
    }
  }
  signUp() {
    this.route.navigate(['/signup']);
  }
}
