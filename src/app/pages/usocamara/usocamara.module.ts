import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsocamaraPageRoutingModule } from './usocamara-routing.module';

import { UsocamaraPage } from './usocamara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsocamaraPageRoutingModule
  ],
  declarations: [UsocamaraPage]
})
export class UsocamaraPageModule {}
