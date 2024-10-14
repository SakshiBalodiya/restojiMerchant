import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilltypeReportPageRoutingModule } from './billtype-report-routing.module';

import { BilltypeReportPage } from './billtype-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilltypeReportPageRoutingModule,
    SharedModule
  ],
  declarations: [BilltypeReportPage],
  providers: [DatePipe],
})
export class BilltypeReportPageModule {}
