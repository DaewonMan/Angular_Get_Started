import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridomponentsModule } from './grid/grid-components.module';

import { GridComponent } from './grid/grid.component';
import { AppImageHandlerComponent } from './app-image-handler/app-image-handler.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridomponentsModule,
    HttpClientModule
  ],
  exports: [
    GridComponent,
    AppImageHandlerComponent
  ],
  declarations: [
    GridComponent,
    AppImageHandlerComponent
  ]
})
export class ComponentsModule {}
