import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridSubComponent } from './components/grid-sub/grid-sub.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    GridSubComponent
  ],
  declarations: [GridSubComponent]
})
export class GridomponentsModule {}
