import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('../../members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
      path: 'historique',
      loadChildren: () => import('.././historique/historique.module').then( m => m.HistoriquePageModule)
    },
    {
      path: 'profil',
      loadChildren: () => import('.././profil/profil.module').then( m => m.ProfilPageModule)
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
