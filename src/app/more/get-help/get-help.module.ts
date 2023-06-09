import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { GetHelpPageRoutingModule } from './get-help-routing.module';

import { GetHelpPage } from './get-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GetHelpPageRoutingModule
  ],
  declarations: [GetHelpPage]
})
export class GetHelpPageModule {}
