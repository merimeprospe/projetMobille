import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDepensePage } from './page-depense.page';

const routes: Routes = [
  {
    path: '',
    component: PageDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDepensePageRoutingModule {}
