import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'design-portfolio',
      component: DesignsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
