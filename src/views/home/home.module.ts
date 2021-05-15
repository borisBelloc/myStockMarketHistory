import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    HomeRoutingModule,
    NgbTooltipModule
  ]
})
export class HomeModule {}
