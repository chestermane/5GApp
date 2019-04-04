import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["/dashboard"]);
  }
}
