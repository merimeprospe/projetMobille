import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEntreePageRoutingModule } from './page-entree-routing.module';

import { PageEntreePage } from './page-entree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEntreePageRoutingModule
  ],
  declarations: [PageEntreePage]
})
export class PageEntreePageModule {}
