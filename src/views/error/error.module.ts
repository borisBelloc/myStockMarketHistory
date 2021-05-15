import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/';

import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
