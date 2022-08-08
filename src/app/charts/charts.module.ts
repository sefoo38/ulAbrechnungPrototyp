import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsHomeComponent } from './charts-home/charts-home.component';


@NgModule({
  declarations: [
    ChartsHomeComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  exports: []
})
export class ChartsModule { }
