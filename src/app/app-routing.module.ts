import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FacebookGuard} from "./guards/facebook.guard";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./components/home/home.component";

const routes:Routes=[
  {path:'',loadChildren:() => import('./components/home/home.module').then(m=>m.HomeModule),
    canActivate:[FacebookGuard]
},{path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
