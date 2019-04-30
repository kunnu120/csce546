import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { orders } from './orders/orders.page';
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  owner: boolean;
  constructor() {
    var config = {
      apiKey: "AIzaSyChZSnSBcwWGQv2GAf4VBIhyB0P4CjkHtI",
      authDomain: "restaurant-16ab5.firebaseapp.com",
      databaseURL: "https://restaurant-16ab5.firebaseio.com",
      projectId: "restaurant-16ab5",
      storageBucket: "restaurant-16ab5.appspot.com",
      messagingSenderId: "405504601979"
    };
    firebase.initializeApp(config);
  }
}
