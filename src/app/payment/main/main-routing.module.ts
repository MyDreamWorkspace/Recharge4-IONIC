import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import {AuthGuard} from "../../gurads/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'airtime',
    loadChildren: () => import('../airtime/airtime.module').then( m => m.AirtimePageModule)
  },
  {
    path: 'electricity',
    loadChildren: () => import('../electricity/electricity.module').then( m => m.ElectricityPageModule)
  },
  {
    path: 'lottery',
    loadChildren: () => import('../lottery/lottery.module').then( m => m.LotteryPageModule)
  },
  {
    path: 'sendMoney',
    loadChildren: () => import('../send-money/send-money.module').then( m => m.SendMoneyPageModule)
  },
  {
    path: 'transactionSuccess',
    loadChildren: () => import('../transaction-success/transaction-success.module').then( m => m.TransactionSuccessPageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('../tv/tv.module').then( m => m.TVPageModule)
  },
  {
    path: 'utility',
    loadChildren: () => import('../utility/utility.module').then( m => m.UtilityPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
