import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/* Componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from "./driver/driver.component";

/* Modulos */
import { DriverPagesModule } from "./driver/driver-pages/driver-pages.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverPagesModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent
  ]
})
export class PagesModule { }
