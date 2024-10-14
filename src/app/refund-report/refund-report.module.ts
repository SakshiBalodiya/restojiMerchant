import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundReportPageRoutingModule } from './refund-report-routing.module';

import { RefundReportPage } from './refund-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundReportPageRoutingModule,
    SharedModule
  ],
  declarations: [RefundReportPage],
  providers: [DatePipe],
})
export class RefundReportPageModule {}
