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
  public static rt: string;
  constructor(private route: Router) {
    this.email = "";
    this.password = "";
    LoginPage.rt = "/home";
  }
  login() {
    if(this.email == "" || this.password == "") {
      alert("Please enter an Username and/or Password");
    } else {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function() {
        LoginPage.rt = "/";
        alert("The Email and/or Password you entered is/are incorrect.");
      });
      this.route.navigate([LoginPage.rt]);
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
