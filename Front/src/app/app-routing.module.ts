import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriverComponent } from "./pages/driver/driver.component";

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch:'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Driver', component: DriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
