import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundReportPage } from './refund-report.page';

const routes: Routes = [
  {
    path: '',
    component: RefundReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundReportPageRoutingModule {}
