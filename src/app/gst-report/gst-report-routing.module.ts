import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstReportPage } from './gst-report.page';

const routes: Routes = [
  {
    path: '',
    component: GstReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GstReportPageRoutingModule {}
