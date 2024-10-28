import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTabsComponent } from '../shared/admin-tabs/admin-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [
      {
        path: 'admin-home',
        loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
      },

      {
        path: 'stories',
        loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
      },

      {
        path: 'admin-profile',
        loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
      },

      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
    ]
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
