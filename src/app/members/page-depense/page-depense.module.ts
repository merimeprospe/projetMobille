import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDepensePageRoutingModule } from './page-depense-routing.module';

import { PageDepensePage } from './page-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDepensePageRoutingModule
  ],
  declarations: [PageDepensePage]
})
export class PageDepensePageModule {}
