import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AddMoneyAccountPageRoutingModule } from './add-money-account-routing.module';

import { AddMoneyAccountPage } from './add-money-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddMoneyAccountPageRoutingModule
  ],
  declarations: [AddMoneyAccountPage]
})
export class AddMoneyAccountPageModule {}
