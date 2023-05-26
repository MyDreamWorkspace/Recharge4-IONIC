import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { VerifyIdentityPageRoutingModule } from './verify-identity-routing.module';

import { VerifyIdentityPage } from './verify-identity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VerifyIdentityPageRoutingModule
  ],
  declarations: [VerifyIdentityPage]
})
export class VerifyIdentityPageModule {}
