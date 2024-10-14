import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaReportPageRoutingModule } from './media-report-routing.module';

import { MediaReportPage } from './media-report.page';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaReportPageRoutingModule,
    SharedModule
  ],
  declarations: [MediaReportPage],
  providers: [DatePipe],
})
export class MediaReportPageModule {}
