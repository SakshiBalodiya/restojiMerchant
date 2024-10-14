import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagemenuPageRoutingModule } from './managemenu-routing.module';

import { ManagemenuPage } from './managemenu.page';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagemenuPageRoutingModule,
    SharedModule
  ],
  declarations: [ManagemenuPage]
})
export class ManagemenuPageModule {}
