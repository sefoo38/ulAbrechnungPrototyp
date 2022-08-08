import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewHomeComponent } from './list-view-home/list-view-home.component';
import { ListViewRoutingModule } from './list-view-routing.module';


@NgModule({
  declarations: [ListViewHomeComponent],
  imports: [
    CommonModule,
    ListViewRoutingModule
  ],
  exports: [ ]
})
export class ListViewModule { }
