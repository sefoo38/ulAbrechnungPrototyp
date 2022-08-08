import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';


@NgModule({
  declarations: [
    MobileHomeComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  exports: []
})
export class MobileModule { }
