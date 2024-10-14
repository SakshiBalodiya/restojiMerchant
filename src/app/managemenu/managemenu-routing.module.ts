import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagemenuPage } from './managemenu.page';

const routes: Routes = [
  {
    path: '',
    component: ManagemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagemenuPageRoutingModule {}
