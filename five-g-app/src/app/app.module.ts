import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { LocationComponent } from "./components/location/location.component";
import { NetworkViewComponent } from "./network-view/network-view.component";
import { MapViewComponent } from "./map-view/map-view.component";
import { FormsModule } from "@angular/forms";

import { LocationsService } from "./service/locations.service";
import { AuthService } from "./service/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    NotFoundComponent,
    LocationComponent,
    NetworkViewComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "5GApp"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [LocationsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
