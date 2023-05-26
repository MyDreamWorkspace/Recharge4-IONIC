import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SendMoneyPageRoutingModule } from './send-money-routing.module';

import { SendMoneyPage } from './send-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    SendMoneyPageRoutingModule
  ],
  declarations: [SendMoneyPage]
})
export class SendMoneyPageModule {}
