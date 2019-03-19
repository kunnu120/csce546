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
  birthDate: string;
  password: string;
  confirmPassword: string;
  userType: string;
  constructor(private route: Router) {
    this.email = "";
    this.name = "";
    this.birthDate = "";
    this.password = "";
    this.confirmPassword = "";
    this.userType = "";
  }

  ngOnInit() {
  }
  goBack() {
    this.route.navigate(['/login']);
  }
  signUp() {
    if(this.birthDate == "") {
      alert("The Birth Date is Empty.");
    } else if(this.userType == "") {
      alert("The User Type is Empty.");
    } else if(this.password != this.confirmPassword) {
      alert("The passwords don't match.")
    } else {
      var self = this;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate, 'User Type' : self.userType});
        self.route.navigate(['/home']);
      }).catch(function(error) {
        alert(error);
      });
    }
    // firebase.auth().
  }
}
