import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
