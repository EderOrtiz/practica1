import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiexternaPage } from './apiexterna.page';

const routes: Routes = [
  {
    path: '',
    component: ApiexternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiexternaPageRoutingModule {}
