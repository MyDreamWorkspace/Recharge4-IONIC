import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TVPage } from './tv.page';

const routes: Routes = [
  {
    path: '',
    component: TVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TVPageRoutingModule {}
