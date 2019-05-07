import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  newMessage: string;
  chats: any[];
  constructor(private route: Router) {
    this.newMessage = '';
    this.chats = [];
    var self = this;
    firebase.database().ref('Messages/'+firebase.auth().currentUser.uid).once('value', (snapshot) => {
      snapshot.forEach((snap) => {
        let uid: string = snap.key.toString();
        firebase.database().ref('User Info/'+uid).once('value', (shot) => {
          shot.forEach((snapy) => {
            firebase.database().ref('User Info/'+uid+'/'+snapy.key).once('value', (shap) => {
              console.log(shap.val());
              self.chats.push({uid: uid, Name: shap.val().Name, 'Profile Pic': shap.val()['Profile Pic']});
            });
          });
        });
      });
    });
  }
  sendMessage() {

  }
  ngOnInit() {
  }
  goBack() {
    this.route.navigate(['/home']);
  }
}
export class Message {
  public message: string;
  public sender: string;
  public reciever: string;
  public time: string;
  public image: string;
  Message(mes: string, sen: string, rec: string, img: string) {
    this.message = mes;
    this.sender = sen;
    this.reciever = rec;
    this.time = new Date().getTime().toString();
    this.image = img;
  }
}
