import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabspagesPageRoutingModule } from './tabspages-routing.module';

import { TabspagesPage } from './tabspages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabspagesPageRoutingModule
  ],
  declarations: [TabspagesPage]
})
export class TabspagesPageModule {}
