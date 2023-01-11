import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: 'tabs',
     loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
   },
  {
    path: 'page-depense',
    loadChildren: () => import('./page-depense/page-depense.module').then( m => m.PageDepensePageModule)
  },
  {
    path: 'page-entree',
    loadChildren: () => import('./page-entree/page-entree.module').then( m => m.PageEntreePageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRouterModule { }
