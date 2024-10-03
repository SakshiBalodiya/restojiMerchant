import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierReportPageRoutingModule } from './cashier-report-routing.module';

import { CashierReportPage } from './cashier-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierReportPageRoutingModule,
    SharedModule,

  ],
  declarations: [CashierReportPage],
  providers: [DatePipe],
})
export class CashierReportPageModule {}
