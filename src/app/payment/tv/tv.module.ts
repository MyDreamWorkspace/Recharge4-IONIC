import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TVPageRoutingModule } from './tv-routing.module';

import { TVPage } from './tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    TVPageRoutingModule
  ],
  declarations: [TVPage]
})
export class TVPageModule {}
