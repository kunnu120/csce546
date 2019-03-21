import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  googleSignUp: boolean;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.email = "";
    this.name = "";
    this.birthDate = "";
    this.password = "";
    this.confirmPassword = "";
    this.userType = "";
    this.r.params.subscribe(params => {this.googleSignUp = params['google'];});
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
    } else if(!this.googleSignUp) {
      var self = this;
      firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate, 'User Type' : self.userType});
      self.route.navigate(['/home']);
    } else {
      var self = this;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate, 'User Type' : self.userType});
        self.route.navigate(['/home']);
      }).catch(function(error) {
        alert(error);
      });
    }
  }
}
