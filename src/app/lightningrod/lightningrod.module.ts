import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightningrodPageRoutingModule } from './lightningrod-routing.module';

import { LightningrodPage } from './lightningrod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightningrodPageRoutingModule
  ],
  declarations: [LightningrodPage]
})
export class LightningrodPageModule {}
