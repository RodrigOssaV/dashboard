import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/* Componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from "./driver/driver.component";
import { SupplierComponent } from './supplier/supplier.component';
import { LoadComponent } from './load/load.component';

/* Modulos */
import { DriverPagesModule } from "./driver/driver-pages/driver-pages.module";
import { DriverComponentsModule } from "./driver/driver-components/driver-components.module";

import { SupplierPagesModule } from "./supplier/supplier-pages/supplier-pages.module";
import { SupplierComponentsModule } from "./supplier/supplier-components/supplier-components.module";

import { LoadPagesModule } from "./load/load-pages/load-pages.module";
import { LoadComponentsModule } from "./load/load-components/load-components.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverPagesModule,
    SupplierPagesModule,
    DriverComponentsModule,
    SupplierComponentsModule,
    LoadPagesModule,
    LoadComponentsModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent
  ]
})
export class PagesModule { }
