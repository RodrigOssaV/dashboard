import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./guard/auth.guard";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriverComponent } from "./pages/driver/driver.component";
import { LoadComponent } from './pages/load/load.component';
import { StatusLoadComponent } from './pages/status-load/status-load.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UsuarioComponent } from "./pages/usuario/usuario.component";

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: UsuarioComponent },
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'Driver', component: DriverComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: 'Load', component: LoadComponent },
  { path: 'Status', component: StatusLoadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
