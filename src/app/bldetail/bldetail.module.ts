import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BldetailPageRoutingModule } from './bldetail-routing.module';

import { BldetailPage } from './bldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BldetailPageRoutingModule
  ],
  declarations: [BldetailPage]
})
export class BldetailPageModule {}
