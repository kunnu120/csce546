import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

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
  profilePic: string;
  img: any;
  constructor(private route: Router, private r: ActivatedRoute, private camera: Camera) {
    this.email = "";
    this.name = "";
    this.birthDate = "";
    this.password = "";
    this.confirmPassword = "";
    this.googleSignUp = true;
    this.profilePic = "";
    this.img = "";
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
      const name = new Date().getTime().toString();
      var self = this;
      firebase.storage().ref().child('Profile Pics/'+firebase.auth().currentUser.uid+'/'+name).putString(this.img, 'base64', {contentType: 'image/jpeg'}).then((x) => {
        firebase.storage().ref().child('Profile Pics/'+firebase.auth().currentUser.uid+'/'+name).getDownloadURL().then((url) =>{
          self.profilePic = url;
        });
      });
      firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate, 'Profile Pic': self.profilePic});
      self.route.navigate(['/home']);
    } else {
      var self = this;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
        const name = new Date().getTime().toString();
        firebase.storage().ref().child('Profile Pics/'+firebase.auth().currentUser.uid+'/'+name).putString(this.img, 'base64', {contentType: 'image/jpeg'}).then((x) => {
          firebase.storage().ref().child('Profile Pics/'+firebase.auth().currentUser.uid+'/'+name).getDownloadURL().then((url) =>{
            self.profilePic = url;
          });
        });
        firebase.database().ref('User Info/'+firebase.auth().currentUser.uid).push({'Name' : self.name, 'Birth Date' : self.birthDate, 'Profile Pic': self.profilePic});
        self.route.navigate(['/home']);
      }).catch(function(error) {
        alert(error);
      });
    }
  }
  async openCamera() {
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    var self = this;
    await this.camera.getPicture(options).then((im) => {
      // console.log(im);
      self.img = im;
    });
  }
}
