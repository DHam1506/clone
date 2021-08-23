import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../shared/material.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule
  ]
})
export class HomeModule { }
