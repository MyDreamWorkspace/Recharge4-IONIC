import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'addMoneyAccount',
    loadChildren: () => import('../add-money-account/add-money-account.module').then( m => m.AddMoneyAccountPageModule)
  },
  {
    path: 'giftCard',
    loadChildren: () => import('../gift-card/gift-card.module').then( m => m.GiftCardPageModule)
  },
  {
    path: 'virtualCard',
    loadChildren: () => import('../virtual-card/virtual-card.module').then( m => m.VirtualCardPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
