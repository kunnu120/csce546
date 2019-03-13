import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MenuController } from '@ionic/angular';
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
      var a: boolean;
      console.clear();
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function() {
        a = true;
        console.log(a+"1");
      }).catch(function() {
        a = false;
        console.log(a+"2");
        alert("The Email and/or Password you entered is/are incorrect.");
      });
      console.log(a+"3");
      if(a) {
        this.route.navigate(['/home']);
        this.email = "";
        this.password = "";
      }
    }
  }
  loginGoogle() {
    var loginInfo = new firebase.auth.GoogleAuthProvider();
  }
  signUp() {
    this.route.navigate(['/signup']);
  }
}
