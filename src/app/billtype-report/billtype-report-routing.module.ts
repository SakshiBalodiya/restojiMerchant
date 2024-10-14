import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilltypeReportPage } from './billtype-report.page';

const routes: Routes = [
  {
    path: '',
    component: BilltypeReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilltypeReportPageRoutingModule {}
