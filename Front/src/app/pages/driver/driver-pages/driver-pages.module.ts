import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { DriverPanelComponent } from './driver-panel/driver-panel.component';

import { DriverComponentsModule } from "../driver-components/driver-components.module";

@NgModule({
  declarations: [
    DriverPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverComponentsModule
  ],
  exports: [
    DriverPanelComponent
  ]
})
export class DriverPagesModule { }
