import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  { 
    path: 'error', 
    loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule)
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
