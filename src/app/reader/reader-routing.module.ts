import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from '../shared/tabs/tabs.component';


const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'endings',
        loadChildren: () => import('./endings/endings.module').then( m => m.EndingsPageModule)
      },
      {
        path: 'likes',
        loadChildren: () => import('./likes/likes.module').then( m => m.LikesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import ('./profile/profile.module').then ( m => m.ProfilePageModule )
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }
