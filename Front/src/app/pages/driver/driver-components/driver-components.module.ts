import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddFormComponent
  ]
})
export class DriverComponentsModule { }
