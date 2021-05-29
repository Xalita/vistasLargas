import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortHomeComponent } from './port-home/port-home.component';


@NgModule({
  declarations: [
    PortHomeComponent
    ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
    ]
})
export class PortfolioModule { }
