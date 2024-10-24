import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePage } from './admin-home/admin-home.page';

const routes: Routes = [
  {
    path: 'admin-home',
    component: AdminHomePage,
  },

  {
    path: '',
    redirectTo: 'admin-home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
