import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryFormPage } from './CategoryFormPage';

const routes: Routes = [
  {
    path: '',
    component: CategoryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryFormPageRoutingModule {}
