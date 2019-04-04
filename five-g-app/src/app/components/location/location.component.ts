import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../../service/locations.service";

import { Location } from "../../models/location";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent implements OnInit {
  // Jimmy - I removed the type here to get my subscription in ngOnInit working.
  locations;
  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    // this.locationService.getLocations().subscribe(locations => {
    //   this.locations = locations;
    // });
    // Jimmy - this was returning 0 Evan. Not sure how you coded that method to return that though. Temporarily replacing with the below code.

    //checks for towers existing in Atlanta. Should actually check for locations.
    this.locationService.getTowers('atl').subscribe(locations => {
      this.locations = locations;
    });
  }
}
