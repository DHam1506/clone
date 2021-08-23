import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../shared/material.module";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule,
    MatBadgeModule,
    MatMenuModule
  ]
})
export class HomeModule { }
