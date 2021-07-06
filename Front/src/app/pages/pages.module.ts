import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/* Componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from "./driver/driver.component";
import { SupplierComponent } from './supplier/supplier.component';

/* Modulos */
import { DriverPagesModule } from "./driver/driver-pages/driver-pages.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverPagesModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent
  ]
})
export class PagesModule { }
