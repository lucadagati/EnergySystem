import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightningrodPage } from './lightningrod.page';

const routes: Routes = [
  {
    path: '',
    component: LightningrodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightningrodPageRoutingModule {}
