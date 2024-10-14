import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstReportPageRoutingModule } from './gst-report-routing.module';

import { GstReportPage } from './gst-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstReportPageRoutingModule,
    SharedModule,
  ],
  declarations: [GstReportPage],
  providers: [DatePipe],
})
export class GstReportPageModule {}
