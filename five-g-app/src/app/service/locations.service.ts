import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Location } from "../models/location";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LocationsService {
  locationCollection: AngularFirestoreCollection<Location>;
  locationDoc: AngularFirestoreDocument<Location>;
  locations: Observable<Location[]>;
  location: Observable<Location>;

  constructor(private afs: AngularFirestore) {
    this.locationCollection = afs.collection("5GApp", ref =>
      ref.orderBy("location", "asc")
    );
  }

  getLocations(): Observable<Location[]> {
    this.locations = this.locationCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Location;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    )
    return this.locations;
  }
}