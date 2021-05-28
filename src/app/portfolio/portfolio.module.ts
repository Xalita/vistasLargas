import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { VinilComponent } from './vinil/vinil.component';


@NgModule({
  declarations: [
    VinilComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
