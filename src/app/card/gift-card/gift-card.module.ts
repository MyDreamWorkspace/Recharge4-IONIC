import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { GiftCardPageRoutingModule } from './gift-card-routing.module';

import { GiftCardPage } from './gift-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GiftCardPageRoutingModule
  ],
  declarations: [GiftCardPage]
})
export class GiftCardPageModule {}
