import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CategoryFormPage } from './pages/category-form/CategoryFormPage';
import { StoryformPage } from './pages/storyform/storyform.page';

const routes: Routes = [
  
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'reader',
    canActivate: [AuthGuard],
    loadChildren: () => import('./reader/reader.module').then( m => m.ReaderModule)},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
  },

  { path: 'addcategory', component: CategoryFormPage},
  { path: 'addstory', 
    loadChildren: () => import('./pages/storyform/storyform.module').then(m => m.StoryformPageModule)
  },
  { path: 'categoryedit/:id',
    loadChildren: () => import('./pages/categoryedit/categoryedit.module').then( m => m.CategoryeditPageModule)
  },
  { path: 'storyedit/:id',
    loadChildren: () => import('./pages/storyedit/storyedit.module').then( m => m.StoryeditPageModule)
  },
  
  {
    path: '',
    redirectTo: 'splashscreen/landing',
    pathMatch: 'full'
  },
  {
    path: 'storydetail',
    loadChildren: () => import('./pages/storydetail/storydetail.module').then( m => m.StorydetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
