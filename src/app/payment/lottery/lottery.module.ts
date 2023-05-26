import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LotteryPageRoutingModule } from './lottery-routing.module';

import { LotteryPage } from './lottery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    LotteryPageRoutingModule
  ],
  declarations: [LotteryPage]
})
export class LotteryPageModule {}
