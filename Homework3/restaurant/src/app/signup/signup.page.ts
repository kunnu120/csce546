import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  name: string;
  username: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  userType: string;
  constructor(private route: Router) {
    this.email = "";
    this.name = "";
    this.username = "";
    this.birthDate = "";
    this.password = "";
    this.confirmPassword = "";
    this.userType = "Visitor";
  }

  ngOnInit() {
  }
  goBack() {
    this.route.navigate(['/login']);
  }
  signUp() {
    if(this.password != this.confirmPassword) {
      alert("The passwords don't match.")
    }
    // firebase.auth().
  }
}
