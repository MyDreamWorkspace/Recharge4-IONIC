import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BankTransferPageRoutingModule } from './bank-transfer-routing.module';

import { BankTransferPage } from './bank-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    BankTransferPageRoutingModule
  ],
  declarations: [BankTransferPage]
})
export class BankTransferPageModule {}
