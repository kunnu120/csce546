import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    var config = {
    apiKey: "AIzaSyD_C6pD4iqiENNc4rUAzunTWNEW2WhL7Ig",
    authDomain: "service-71327.firebaseapp.com",
    databaseURL: "https://service-71327.firebaseio.com",
    projectId: "service-71327",
    storageBucket: "service-71327.appspot.com",
    messagingSenderId: "304887034397"
    };
    firebase.initializeApp(config);
  }
}
