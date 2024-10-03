import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesReportPageRoutingModule } from './sales-report-routing.module';

import { SalesReportPage } from './sales-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesReportPageRoutingModule,
    SharedModule
  ],
  declarations: [SalesReportPage],
  providers: [DatePipe],
})
export class SalesReportPageModule {}
