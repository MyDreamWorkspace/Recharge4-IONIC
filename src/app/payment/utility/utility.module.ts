import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { UtilityPageRoutingModule } from './utility-routing.module';

import { UtilityPage } from './utility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    UtilityPageRoutingModule
  ],
  declarations: [UtilityPage]
})
export class UtilityPageModule {}
