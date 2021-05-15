import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../../app/shared/shared.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioModule { }
