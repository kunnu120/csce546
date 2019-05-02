import { Component, OnInit } from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  map: GoogleMap;
  private geolocation: Geolocation;
  private nativeGeocoder: NativeGeocoder;
  constructor() {
    this.initMap();
  }

  initMap() {
    Environment.setEnv({
     'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyBlK9YGUdec_wwiOywY0ckpDyblrnknVQA)',
     'API_KEY_FOR_BROWSER_DEBUG': '(AIzaSyBlK9YGUdec_wwiOywY0ckpDyblrnknVQA)'
   });
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 33.9961,
          lng: 81.0274
        },
        zoom: 8,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map', mapOptions);
  }

}
