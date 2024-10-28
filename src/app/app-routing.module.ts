import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CategoryFormPage } from './pages/category-form/category-form.page';

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
  
  {path: 'addcategory', component: CategoryFormPage},

  {
    path: '',
    redirectTo: 'splashscreen/landing',
    pathMatch: 'full'
  },
  {
    path: 'category-form',
    loadChildren: () => import('./pages/category-form/category-form.module').then( m => m.CategoryFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
