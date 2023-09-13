import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsocamaraPage } from './usocamara.page';

const routes: Routes = [
  {
    path: '',
    component: UsocamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsocamaraPageRoutingModule {}
