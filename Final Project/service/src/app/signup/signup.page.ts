import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
  googleSignUp: boolean;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.email = "";
    this.name = "";
    this.birthDate = "";
    this.password = "";
    this.confirmPassword = "";
    this.googleSignUp = true;
    if(firebase.auth().currentUser != null) {
      this.googleSignUp = false;
      console.log(firebase.auth().currentUser.uid);
    }
  }

  ngOnInit() {

  }
  goBack() {
    if(!this.googleSignUp) {
      firebase.auth().signOut();
    }
    this.route.navigate(['/login']);
  }
  signUp() {
    if(this.birthDate == "") {
      alert("The Birth Date is Empty.");
    } else if(this.password != this.confirmPassword) {
      alert("The passwords don't match.")
    } else if(!this.googleSignUp) {
      var self = this;
      firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate});
      self.route.navigate(['/home']);
    } else {
      var self = this;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate});
        self.route.navigate(['/home']);
      }).catch(function(error) {
        alert(error);
      });
    }
  }
  openCamera() {
    // var options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    //
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64 (DATA_URL):
    //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //  // Handle error
    // });
  }
}
