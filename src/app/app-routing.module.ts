import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DesignsComponent } from './designs/designs.component';
import { DevelopmentComponent } from './development/development.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'design-portfolio',
      component: DesignsComponent
    },
    {
      path: 'dev-portfolio',
      component: DevelopmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
