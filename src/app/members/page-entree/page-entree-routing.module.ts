import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEntreePage } from './page-entree.page';

const routes: Routes = [
  {
    path: '',
    component: PageEntreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEntreePageRoutingModule {}
