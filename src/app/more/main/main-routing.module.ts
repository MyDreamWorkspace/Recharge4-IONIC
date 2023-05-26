import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'faq',
    loadChildren: () => import('../faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'getHelp',
    loadChildren: () => import('../get-help/get-help.module').then( m => m.GetHelpPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('../security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'verifyIdentity',
    loadChildren: () => import('../verify-identity/verify-identity.module').then( m => m.VerifyIdentityPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
