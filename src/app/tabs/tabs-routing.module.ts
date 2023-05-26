import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../payment/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
},
{
  path: '',
    redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
