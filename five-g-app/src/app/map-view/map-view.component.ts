import { Component, OnInit } from '@angular/core';
import {
  latLng,
  Layer,
  tileLayer,
  circle,
  circleMarker,
  icon,
  marker
} from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent {
  layer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Open Street Map'
  });
  options = {
    layers: [this.layer],
    zoom: 8,
    center: latLng(33.885027, -84.386111)
  };
  pin = icon({
    iconUrl: '../../assets/marker-icon.png',
    shadowUrl: '../../assets/marker-shadow.png',
    iconAnchor: [15, 35]
  });
  markers: Layer[] = [
    marker([33.885027, -84.386111], { icon: this.pin }),
    circle([33.885027, -84.386111], {
      color: '#228B22',
      radius: 5000,
      fillOpacity: 0.5
    }),
    marker([33.055557, -83.370892], { icon: this.pin }),
    circle([33.055557, -83.370892], {
      color: '#228B22',
      radius: 5000,
      fillOpacity: 0.5
    })
  ];
}
