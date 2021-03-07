import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BldetailPage } from './bldetail.page';

const routes: Routes = [
  {
    path: '',
    component: BldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BldetailPageRoutingModule {}
