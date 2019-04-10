import { Component, OnInit } from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  map: any;
  constructor() {}//private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  // initMap() {
  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //     center: {
  //       lat: 33.99243,
  //       lng: -81.03057
  //     },
  //     zoom: 8
  //   });
  // }

}
