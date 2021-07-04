import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { DriverComponentsModule } from "../driver-components/driver-components.module";

import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { DriverTableComponent } from './driver-table/driver-table.component';

@NgModule({
  declarations: [
    DriverPanelComponent,
    DriverTableComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverComponentsModule
  ],
  exports: [
    DriverPanelComponent,
    DriverTableComponent
  ]
})
export class DriverPagesModule { }
