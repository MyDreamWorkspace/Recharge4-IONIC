import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { VirtualCardPageRoutingModule } from './virtual-card-routing.module';

import { VirtualCardPage } from './virtual-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VirtualCardPageRoutingModule
  ],
  declarations: [VirtualCardPage]
})
export class VirtualCardPageModule {}
