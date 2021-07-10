import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { LoadPanelComponent } from './load-panel/load-panel.component';
import { LoadTableComponent } from './load-table/load-table.component';

@NgModule({
  declarations: [
    LoadPanelComponent,
    LoadTableComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LoadPanelComponent,
    LoadTableComponent
  ]
})
export class LoadPagesModule { }
