import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderViewPageRoutingModule } from './order-view-routing.module';

import { OrderViewPage } from './order-view.page';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderViewPageRoutingModule,
    SharedModule
  ],
  declarations: [OrderViewPage]
})
export class OrderViewPageModule {}
