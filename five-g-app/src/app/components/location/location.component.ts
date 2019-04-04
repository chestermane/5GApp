import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../../service/locations.service";

import { Location } from "../../models/location";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent implements OnInit {
  locations: Location[];
  constructor(private locationService: LocationsService) {}

  ngOnInit() {
    this.locationService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }
}
