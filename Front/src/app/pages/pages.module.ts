import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from "./driver/driver.component";

@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent
  ]
})
export class PagesModule { }
