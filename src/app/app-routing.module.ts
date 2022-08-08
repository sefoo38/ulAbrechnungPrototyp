import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'listview', 
      loadChildren: () => 
      import('./list-view/list-view.module').then(m => m.ListViewModule)
  },
  { 
    path: 'charts', 
      loadChildren: () => 
      import('./charts/charts.module').then(m => m.ChartsModule)
  },
  { 
    path: 'settings', 
      loadChildren: () => 
      import('./settings/settings.module').then(m => m.SettingsModule)
  },
  { 
    path: 'mobile', 
      loadChildren: () => 
      import('./mobile/mobile.module').then(m => m.MobileModule)
  },
  { path: '', component: HomeComponent },
  { path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
