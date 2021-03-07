import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lightningrod',
    loadChildren: () => import('./lightningrod/lightningrod.module').then( m => m.LightningrodPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'bldetail',
    loadChildren: () => import('./bldetail/bldetail.module').then( m => m.BldetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
