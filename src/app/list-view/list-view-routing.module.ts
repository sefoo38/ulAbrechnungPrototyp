import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewHomeComponent } from './list-view-home/list-view-home.component';

const routes: Routes = [
  { path: '', component: ListViewHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewRoutingModule { }
