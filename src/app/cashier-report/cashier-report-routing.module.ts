import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierReportPage } from './cashier-report.page';

const routes: Routes = [
  {
    path: '',
    component: CashierReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierReportPageRoutingModule {}
