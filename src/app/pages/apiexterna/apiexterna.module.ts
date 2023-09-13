import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiexternaPageRoutingModule } from './apiexterna-routing.module';

import { ApiexternaPage } from './apiexterna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiexternaPageRoutingModule
  ],
  declarations: [ApiexternaPage]
})
export class ApiexternaPageModule {}
