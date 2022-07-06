import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridomponentsModule } from './grid/grid-components.module';

import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridomponentsModule
  ],
  exports: [
    GridComponent
  ],
  declarations: [GridComponent]
})
export class ComponentsModule {}
