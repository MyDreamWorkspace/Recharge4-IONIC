import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMoneyAccountPage } from './add-money-account.page';

const routes: Routes = [
  {
    path: '',
    component: AddMoneyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMoneyAccountPageRoutingModule {}
