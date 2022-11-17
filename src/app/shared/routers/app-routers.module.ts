import { NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {MainPersonalComponent} from "../../modules/personal/pages/main-personal/main-personal.component";
import {SinginComponent} from "../../modules/auth/pages/singin/singin.component";
import {AppComponent} from "../../app.component";

const routes: Routes = [
  {
    path:'',
    component: MainPersonalComponent,
    pathMatch: "full",
  },
  {
    path: 'auth',
    component: SinginComponent,
  },
  {
    path: 'personal',
    component: MainPersonalComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap:[AppComponent],
})
export class appRouterModule{}
