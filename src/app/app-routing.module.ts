import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from '../views/home/home-routing.module';
import { PageNotFoundComponent } from '../views/error/components';
import { PortfolioRoutingModule } from '../views/portfolio/portfolio-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    PortfolioRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
