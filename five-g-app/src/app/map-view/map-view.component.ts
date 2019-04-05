import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = L.map('map').setView([34.055557, -84.277249], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const circle = L.circle([34.055557, -84.277249], {
      color: 'green',
      fillColor: '#10da20',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  }
}
